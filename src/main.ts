import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { CsvService } from './app/admin/services/csv/csv.service';

async function bootstrap() {
  if (process.argv[2] === 'doSomething') {
    const app = await NestFactory.createApplicationContext(AppModule);
    console.log(`Execute ApplicationContext ${process.argv[2]}`);
    const csvService = app.get(CsvService);
    csvService.handleCsv();
    await app.close();
  } else {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    );
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = parseInt(process.env.port, 10) || 3333;
    await app.listen(port, '0.0.0.0', () => {
      console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
  }
}

bootstrap();

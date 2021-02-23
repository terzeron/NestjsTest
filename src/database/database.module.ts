import {Module, DynamicModule} from '@nestjs/common';
import {createDatabaseProviders} from './database.providers';
import {Connection} from './connection.provider';

@Module({
    providers: [Connection],
})
export class DatabaseModule {
    // forRoot()는 동기적으로 또는 비동기적으로 동적 모듈을 반환할 수도 있다.
    // @Module() 애노테이션을 이용하여 기본적으로 Connection 클래스를 프로바이더로 지정하고
    // forRoot()를 이용하여 추가적으로 프로바이더와 저장소 집합을 지정하게 된다.
    static forRoot(entities = [], options?): DynamicModule {
        const providerList = createDatabaseProviders(options, entities);
        return {
            global: true,
            module: DatabaseModule,
            providers: providerList,
            exports: providerList,
        };
    }
}

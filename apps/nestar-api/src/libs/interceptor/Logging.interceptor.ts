import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private readonly logger: Logger = new Logger();

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const recordTime = Date.now();
		console.log('contect+:', context);
		const requestType = context.getType<GqlContextType>();
		console.log('requestType:+', requestType);

		if (requestType === 'http') {
			/* Develop if needed!  */
		} else if (requestType === 'graphql') {
			/* (1) Print Request */
			const gqlContext = GqlExecutionContext.create(context);
			console.log('gqlContext++', gqlContext);
			this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'REQUEST');

			/* (2) Error handling via GraphQL */

			/* (3) No Errors, giving Response below */
			return next.handle().pipe(
				tap((contect) => {
					const responseTime = Date.now() - recordTime;
					this.logger.log(`${this.stringify(contect)} - ${responseTime}ms \n\n`, 'RESPONSE');
				}),
			);
		}
	}

	private stringify(context: ExecutionContext): string {
		return JSON.stringify(context).slice(0, 75);
	}
}

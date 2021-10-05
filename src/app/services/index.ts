import { ApiEndPoints } from './api.endpoints';
import { ApiService } from './api.service';

export const services: any[] = [
	ApiService,
	ApiEndPoints
];

export * from './api.endpoints';
export * from './api.service';

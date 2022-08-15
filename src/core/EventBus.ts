import { Callback } from './types';

export default class EventBus {
	readonly listeners: Record<string, Array<(args: any) => void>>;

	constructor() {
		this.listeners = {};
	}

	public on(event: string, callback: Callback) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}
		this.listeners[event].push(callback);
	}

	public off(event: string, callback: Callback) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}
		this.listeners[event] = this.listeners[event].filter(
			(listener) => listener !== callback
		);
	}

	public emit(event: string, ...args: any) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event].forEach((listener) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
			listener(...args);
		});
	}
}

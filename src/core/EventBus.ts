import { Callback } from './types';

export default class EventBus {
	readonly listeners: Record<string, Array<() => void>>;

	constructor() {
		//список с событиями
		this.listeners = {};
	}

	public on(event: string, callback: Callback) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}
		//добавляем новый колбэк
		this.listeners[event].push(callback);
	}

	public off(event: string, callback: Callback) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}
		//отписываемся от события
		this.listeners[event] = this.listeners[event].filter(
			(listener) => listener !== callback
		);
	}

	public emit(event: string, ...args: unknown[]) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event].forEach((listener) => {
			//вызываем событие с передачей аргументов
			listener(...args);
		});
	}
}

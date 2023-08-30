declare global {
	interface Window {
		ym: (...args: any[]) => void;
	}
}

const enum EventType {
	Init = 'init',
	Hit = 'hit',
	ReachGoal = 'reachGoal'
}

interface UserParameters {
	UserID?: number | undefined;
	[key: string]: any;
}

interface InitParameters {
	accurateTrackBounce?: boolean | number | undefined;
	childIframe?: boolean | undefined;
	clickmap?: boolean | undefined;
	defer?: boolean | undefined;
	ecommerce?: boolean | string | any[] | undefined;
	params?: VisitParameters | VisitParameters[] | undefined;
	userParams?: UserParameters | undefined;
	trackHash?: boolean | undefined;
	trackLinks?: boolean | undefined;
	trustedDomains?: string[] | undefined;
	type?: number | undefined;
	ut?: 'noindex' | undefined;
	webvisor?: boolean | undefined;
	triggerEvent?: boolean | undefined;
}

interface VisitParameters {
	order_price?: number | undefined;
	currency?: string | undefined;
	[key: string]: any;
}

interface HitOptions<CTX> {
	callback?: (this: CTX) => void;
	ctx?: CTX | undefined;
	params?: VisitParameters | undefined;
	referer?: string | undefined;
	title?: string | undefined;
}

interface Event {
	[EventType.Hit]: <CTX>(url: string, options?: HitOptions<CTX>) => void;
	[EventType.ReachGoal]: <CTX>(
		target: string,
		params: VisitParameters,
		callback?: (this: CTX) => void,
		ctx?: CTX
	) => void;
}

export class YandexMetrika implements Event {
	constructor(
		protected id: number,
		options: InitParameters = {}
	) {
		this.init(options);
	}

	protected init(options: InitParameters = {}) {
		this.call(EventType.Init, options);
	}

	hit(
		url = '',
		options: {
			referer?: string;
			title?: string;
		} = {}
	) {
		this.call(EventType.Hit, url, options);
	}

	reachGoal(...args: Parameters<Event[EventType.ReachGoal]>): void {
		this.call(EventType.ReachGoal, ...args);
	}

	private call(type: EventType, ...args: any[]) {
		if (process.dev) {
			this.print(type, ...args);
		} else {
			window.ym(this.id, type, ...args);
		}
	}

	private print(type: EventType, ...args: any[]) {
		console.info(`[yandex-metrika] ${type}`, ...args);
	}
}

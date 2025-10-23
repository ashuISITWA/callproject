declare module 'xml2js' {
  export function parseStringPromise(xml: string, options?: any): Promise<any>;
  export function parseString(xml: string, callback: (err: any, result: any) => void): void;
  export function parseString(xml: string, options: any, callback: (err: any, result: any) => void): void;
}

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/*
因為typescript認不得沒有指定型別的物件
所以在typings.d.ts
重新declare 物件型別為any
*/

declare var $: any;
declare var Colors;

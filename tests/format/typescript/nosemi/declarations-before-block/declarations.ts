declare module "ambient";

{
  useAmbient();
}

declare function ambientFunction();

{
  useAmbientFunction();
}

function overload();
{}

export declare function exported();
{}

export default function defaultExport();
{}

declare function withComment(); // Keep the declaration separate.
/* Block comment */
{}

declare function withEmptyStatements();
;;
{}

declare function beforeIgnoredBlock();
// prettier-ignore
{   leaveThisBlockAlone(); }

declare function ordinary();
useOrdinary();

declare module "ordinary";
useModule();

declare module "with-body" {};
{}

declare function beforeArray();
[useArray()];

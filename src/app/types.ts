declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  // @ts-ignore
  export = classNames;
}

declare module "*.svg" {
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  // @ts-ignore
  export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

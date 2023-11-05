import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string,
    rightIcon?:string,
    isDisabled?:boolean,
}
export interface OptionProps{
    title:string,
    value:string,
}
export interface CustomFilterProps{
    title:string,
    options:OptionProps[],
    
}
export interface ManufacturerProps{
   manufacturer: string;
   setManufacturer: (Manufacturer:string)=>void
    
}
export interface CarProp{
    id:number,
    city_mpg:number,
    class:string,
    combination_mpg:number,
    cylinders:number,
    displacement:number,
    drive:string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string,
    transmission:string,
    year:number,
    
}
export interface FilterProp{
   
    fuel:string,
    limit:number,
   
    model:string,
   manufacturer:string,
    year:number,
    
}
export interface ShowMoreProp{
   
   pageNumber:number,
   isNext:boolean,
    
}
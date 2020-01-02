import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, fieldName: string): any[];
}

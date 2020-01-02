import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText, fieldName) {
        // return empty array if array is falsy
        if (!items) {
            return [];
        }
        // return the original array if search text is empty
        if (!searchText) {
            return items;
        }
        // convert the searchText to lower case
        searchText = searchText.toLowerCase();
        // retrun the filtered array
        return items.filter(function (item) {
            if (item && item[fieldName]) {
                return item[fieldName].toLowerCase().includes(searchText);
            }
            return false;
        });
    };
    FilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHVhbC1zZWxlY3QvIiwic291cmNlcyI6WyJzcmMvYXBwL3NoYXJlZC9waXBlcy9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQ7SUFBQTtJQXFCQSxDQUFDO0lBbkJDLDhCQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsVUFBa0IsRUFBRSxTQUFpQjtRQUUzRCx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFFMUIsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBRWxDLHVDQUF1QztRQUN2QyxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXRDLDRCQUE0QjtRQUM1QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJO1lBQ3RCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQlUsVUFBVTtRQUh0QixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7T0FDVyxVQUFVLENBcUJ0QjtJQUFELGlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZmlsdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKTogYW55W10ge1xyXG5cclxuICAgIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiBhcnJheSBpcyBmYWxzeVxyXG4gICAgaWYgKCFpdGVtcykgeyByZXR1cm4gW107IH1cclxuXHJcbiAgICAvLyByZXR1cm4gdGhlIG9yaWdpbmFsIGFycmF5IGlmIHNlYXJjaCB0ZXh0IGlzIGVtcHR5XHJcbiAgICBpZiAoIXNlYXJjaFRleHQpIHsgcmV0dXJuIGl0ZW1zOyB9XHJcblxyXG4gICAgLy8gY29udmVydCB0aGUgc2VhcmNoVGV4dCB0byBsb3dlciBjYXNlXHJcbiAgICBzZWFyY2hUZXh0ID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIHJldHJ1biB0aGUgZmlsdGVyZWQgYXJyYXlcclxuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgIGlmIChpdGVtICYmIGl0ZW1bZmllbGROYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtW2ZpZWxkTmFtZV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXX0=
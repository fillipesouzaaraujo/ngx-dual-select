import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    transform(items, searchText, fieldName) {
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
        return items.filter(item => {
            if (item && item[fieldName]) {
                return item[fieldName].toLowerCase().includes(searchText);
            }
            return false;
        });
    }
};
FilterPipe = tslib_1.__decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHVhbC1zZWxlY3QvIiwic291cmNlcyI6WyJzcmMvYXBwL3NoYXJlZC9waXBlcy9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUVyQixTQUFTLENBQUMsS0FBWSxFQUFFLFVBQWtCLEVBQUUsU0FBaUI7UUFFM0QsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBRTFCLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUVsQyx1Q0FBdUM7UUFDdkMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0Qyw0QkFBNEI7UUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBckJZLFVBQVU7SUFIdEIsSUFBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDO0dBQ1csVUFBVSxDQXFCdEI7U0FyQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgc2VhcmNoVGV4dDogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZyk6IGFueVtdIHtcblxuICAgIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiBhcnJheSBpcyBmYWxzeVxuICAgIGlmICghaXRlbXMpIHsgcmV0dXJuIFtdOyB9XG5cbiAgICAvLyByZXR1cm4gdGhlIG9yaWdpbmFsIGFycmF5IGlmIHNlYXJjaCB0ZXh0IGlzIGVtcHR5XG4gICAgaWYgKCFzZWFyY2hUZXh0KSB7IHJldHVybiBpdGVtczsgfVxuXG4gICAgLy8gY29udmVydCB0aGUgc2VhcmNoVGV4dCB0byBsb3dlciBjYXNlXG4gICAgc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIHJldHJ1biB0aGUgZmlsdGVyZWQgYXJyYXlcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0gJiYgaXRlbVtmaWVsZE5hbWVdKSB7XG4gICAgICAgIHJldHVybiBpdGVtW2ZpZWxkTmFtZV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufSJdfQ==
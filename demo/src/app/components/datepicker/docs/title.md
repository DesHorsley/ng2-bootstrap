The Angular2 Datepicker is a highly configurable component that adds datepicker functionality to your pages. You can customize the date format and language, restrict the selectable date ranges.

<!-- Base specifications: [jquery-ui](https://api.jqueryui.com/datepicker/) -->
### Usage
```typescript
// RECOMMENDED
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
// or
import { DatepickerModule } from 'ng2-bootstrap';

@NgModule({
  imports: [DatepickerModule.forRoot(),...]
})
export class AppModule(){} 
```

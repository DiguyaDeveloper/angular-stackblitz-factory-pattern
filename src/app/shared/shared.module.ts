import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "./components/table-custom/table.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule],
  exports: [TableModule],
})
export class SharedModule {}

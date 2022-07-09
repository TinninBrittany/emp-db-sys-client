import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const materialModules: any[] = [

]

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [...materialModules]
})
export class MaterialModuleModule { }

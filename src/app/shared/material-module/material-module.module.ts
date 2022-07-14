import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



const materialModules: any[] = [
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule
]

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [...materialModules]
})
export class MaterialModuleModule { }

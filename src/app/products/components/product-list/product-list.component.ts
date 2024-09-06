import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from "../../model/product.entity";
import { FakestoreApiService } from '../../services/fakestore-api.service';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, TranslateModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Array<Product> = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'category', 'image', 'rate', 'count'];
  dataSource: any;

  constructor(private fakestoreApiService: FakestoreApiService) {
  }

  applyFilter(event: Event) : void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.fakestoreApiService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
    });
  }
}

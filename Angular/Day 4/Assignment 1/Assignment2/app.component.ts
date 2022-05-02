

<div class="content" role="main">


    <!-- <app-emp></app-emp>
    <hr>
    <app-friends></app-friends>
    <hr>
    <app-sales></app-sales> -->

    <!-- <app-products  [productDetails]="productsArray" (selectedCat)="getProductList($event)" ></app-products> -->
    <!-- <app-sort-options></app-sort-options>
    <hr>
    <app-emp-list></app-emp-list> -->
    <!-- <app-user-info></app-user-info> -->
    <!-- <app-employee-grades></app-employee-grades> -->
    <!-- <app-employee-salary></app-employee-salary> -->
    <!-- <app-product-directives></app-product-directives> -->
    <app-fancy-card>
        <h4 bottom>This is the footer from the Fancy Component</h4>
        
        <app-product-list>
            <span>This is the data from product-list component</span>
        </app-product-list>
    
        <p>This is the default ng-content data from App component to fancy-card</p>
    
       
        <h1 top>This is the header from the Fancy component</h1>
    </app-fancy-card>
</div>

<router-outlet></router-outlet>

export interface Product {
	product: {
		response: Record<string, string | number>;
		dt: string;
		sqlQuery: string;
		productVersion: string;
		queryTime: number;
		resCount: number;
	};
}

export interface Supplier {
	supplier: {
		response: Record<string, string | number>;
		dt: string;
		sqlQuery: string;
		productVersion: string;
		queryTime: number;
		resCount: number;
	};
}

interface Suppliers {
	supplierId: number;
	Company: string;
	Contact: string;
	Title: string;
	City: string;
	Country: string;
}

interface Products {
	productId: number;
	Name: string;
	"Qt per unit": string;
	Price: string;
	Stock: number;
	Order: number;
}

interface Customers {
	customerId: string;
	Company: string;
	Contact: string;
	Title: string;
	City: string;
	Country: string;
}

interface Orders {
	Id: number;
	"Total Price": number;
	Products: number;
	Quantity: number;
	Shipped: string;
	"Ship Name": string;
	City: string;
	Country: string;
}

interface Employees {
	employeeId: number;
	Name: string;
	Title: string;
	City: string;
	Country: string;
	Phone: string;
}

export interface searchResult {
	productId: number;
	productName: string;
	quantityPerUnit: string;
	unitPrice: number;
	unitsInStock: number;
	customerId: string;
	companyName: string;
	contactName: string;
	contactTitle: string;
	phone: string;
}

export interface SearchResultApi {
	response: searchResult[];
	dt: string;
	sqlQuery: string;
	productVersion: string;
	queryTime: number;
}

export interface Metric {
	dt: string;
	sqlQuery: string;
	productVersion: string;
	queryTime: number;
	resCount: number;
}

export interface EmployeesResAPI {
	employees: {
		response: Employees[];
		dt: string;
		sqlQuery: string;
		productVersion: string;
		queryTime: number;
	};
}

export interface CustomersResAPI {
	customers: {
		response: Customers[];
		dt: string;
		sqlQuery: string;
		productVersion: string;
		queryTime: number;
	};
}

export interface OrdersResAPI {
	orders: {
		response: Orders[];
		dt: string;
		sqlQuery: string;
		productVersion: string;
		queryTime: number;
	};
}

export interface SuppResAPI {
	suppliers: {
		response: Suppliers[];
		dt: string;
		sqlQuery: string;
		productVersion: string;
		queryTime: number;
	};
}

export interface PrResAPI {
	products: {
		response: Products[];
		dt: string;
		sqlQuery: string;
		productVersion: string;
		queryTime: number;
	};
}

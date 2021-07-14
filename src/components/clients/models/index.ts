export interface ClientVM {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  addresses: AddressVM[];
  isActive: boolean;
}

export interface AddressVM {
  id: number;
  name: string;
  isActive: boolean;
}

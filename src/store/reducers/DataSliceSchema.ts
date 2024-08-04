export interface DataTable {
    'id': string,
    'documentStatus': string,
    'employeeNumber': string,
    'documentType': string,
    'documentName': string,
    'companySignatureName': string,
    'employeeSignatureName': string,
    'employeeSigDate': string,
    'companySigDate': string,
}

export interface DataSliceSchema {
    isLoading: boolean;
    error?: string;

    table?: DataTable[]
}

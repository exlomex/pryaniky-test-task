import { LoginFormSliceSchema } from '../reducers/LoginFormSliceSchema.ts';
import { UserSliceSchema } from '../reducers/UserSliceSchema.ts';
import { DataSliceSchema } from '../reducers/DataSliceSchema.ts';
import { ModalDataSliceSchema } from '../reducers/ModalDataSliceSchema.ts';

export interface StateSchema {
    loginForm: LoginFormSliceSchema,
    user: UserSliceSchema,
    data: DataSliceSchema,
    modalData: ModalDataSliceSchema,
}

import { jsx as _jsx } from "react/jsx-runtime";
import { Login } from '@/presentation/components/organisms';
import { LayoutLogin } from '@/presentation/layouts/LayoutLogin/LayoutLogin';
function LoginPage() {
    return (_jsx(LayoutLogin, { children: _jsx(Login, {}) }));
}
export default LoginPage;

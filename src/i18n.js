import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        dashboard: "Dashboard",
        products: "Products",
        users: "Users",
        settings: "Settings",
        logout: "Logout",
        login: "Login",
        email: "Email",
        password: "Password",
        create_product: "Create Product",
        edit: "Edit",
        delete: "Delete",
        view: "View",
        no_data: "No data available",
        loading: "Loading...",
        theme: "Theme",
        language: "Language",
      }
    },
    es: {
      translation: {
        welcome: "Bienvenido",
        dashboard: "Panel",
        products: "Productos",
        users: "Usuarios",
        settings: "Configuración",
        logout: "Cerrar sesión",
        login: "Iniciar sesión",
        email: "Correo",
        password: "Contraseña",
        create_product: "Crear Producto",
        edit: "Editar",
        delete: "Eliminar",
        view: "Ver",
        no_data: "Sin datos",
        loading: "Cargando...",
        theme: "Tema",
        language: "Idioma",
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
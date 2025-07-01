# M2_Evaluacion
Repositorio correspondiente a la evaluacion del M2 para TD
# CyberInfo – Guía de Ciberseguridad

Una web informativa sobre ciberseguridad que consta de tres secciones principales: Inicio, Amenazas Comunes y Consejos de Seguridad, además de un Test de Seguridad interactivo.

---

## 📂 Estructura de carpetas

proyecto-ciberseguridad/
│
├─ index.html ← Página de bienvenida
├─ amenazas.html ← Descripción de amenazas comunes
├─ consejos.html ← Buenas prácticas y formulario de contacto
│
├─ assets/
│ ├─ css/
│ │ └─ style.css ← Estilos base y ajustes de diseño
│ │
│ ├─ js/
│ │ └─ script.js ← Validación de formularios y lógica del Test
│ │
│ └─ img/
│ ├─ banner.jpg ← Hero de la página de Inicio
│ ├─ phishing.png ← Icono de phishing
│ ├─ ransomware.png ← Icono de ransomware
│ ├─ malware.png ← Icono de malware
│ ├─ ddos.png ← Icono de DDoS
│ ├─ consejos.jpg ← Banner de Consejos
│ └─ test-icon.png ← Icono para botón de Test
├─ .gitignore ← Lista de archivos/carpetas ignorados por Git
└─ README.md ← Este documento

---

## 🚀 Descripción de cada página

### 1. `index.html` – Inicio  
- **Navbar** con enlaces a las tres secciones.  
- **Hero** con `banner.jpg`, título y subtítulo.  
- **Introducción** breve a la ciberseguridad.  

### 2. `amenazas.html` – Amenazas Comunes  
- **Mismo navbar** que en Inicio (para navegación fluida).  
- **Cards** responsivas (Bootstrap) para Phishing, Ransomware, Malware y DDoS.  
- **Acordeón** con casos reales (filtración de datos y WannaCry).  

### 3. `consejos.html` – Consejos de Seguridad  
- **Navbar** idéntico.  
- **Banner ilustrativo** (`consejos.jpg`) recortado a 200 px de altura.  
- **Lista** de buenas prácticas en formato Bootstrap `list-group`.  
- **Formulario de contacto** con validación nativa y clases de Bootstrap.  
- **Botón & modal** para un **Test de Seguridad** interactivo.  
  - Test de una pregunta con feedback inmediato.

---

## ⚙️ Tecnologías y dependencias

- **HTML5**, **CSS3**  
- **Bootstrap 5** (CDN) para grid, navbar, cards, acordeones y modales.  
- **JavaScript puro** y **Bootstrap Bundle** (`bootstrap.bundle.min.js`)  
- **Validación de formularios** con API de Constraint Validation  
- **No hay dependencias de Node/npm**; sólo archivos estáticos.

---



// Temas disponibles
const temas = {
    default: {
        primary: '#d97ba8',
        secondary: '#c75a96',
        light: '#fdf0f5',
        lighter: '#fff5f9',
        accent: '#f4a6c1',
        accentHover: '#ed8bb1',
        gradient: 'linear-gradient(135deg, #fdf0f5 0%, #f5e6f0 100%)',
        headerGradient: 'linear-gradient(135deg, #d97ba8 0%, #c75a96 100%)',
        name: '🌸 Rosa Palo'
    },
    blue: {
        primary: '#3498db',
        secondary: '#2980b9',
        light: '#ecf0f1',
        lighter: '#f8f9fa',
        accent: '#5dade2',
        accentHover: '#3498db',
        gradient: 'linear-gradient(135deg, #ecf0f1 0%, #e0e6e8 100%)',
        headerGradient: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
        name: '🔵 Azul'
    },
    green: {
        primary: '#27ae60',
        secondary: '#229954',
        light: '#eafaf1',
        lighter: '#f4fdf9',
        accent: '#52be80',
        accentHover: '#45b66e',
        gradient: 'linear-gradient(135deg, #eafaf1 0%, #d5f4e6 100%)',
        headerGradient: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
        name: '🟢 Verde'
    },
    purple: {
        primary: '#8e44ad',
        secondary: '#7d3c98',
        light: '#f4ecf7',
        lighter: '#faf8fc',
        accent: '#af7ac5',
        accentHover: '#9b59b6',
        gradient: 'linear-gradient(135deg, #f4ecf7 0%, #ede7f6 100%)',
        headerGradient: 'linear-gradient(135deg, #8e44ad 0%, #7d3c98 100%)',
        name: '🟣 Púrpura'
    },
    orange: {
        primary: '#e67e22',
        secondary: '#d35400',
        light: '#fef5e7',
        lighter: '#fef9f3',
        accent: '#f8b88b',
        accentHover: '#f39c12',
        gradient: 'linear-gradient(135deg, #fef5e7 0%, #fde8d1 100%)',
        headerGradient: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
        name: '🟠 Naranja'
    },
    teal: {
        primary: '#16a085',
        secondary: '#138d75',
        light: '#e8f8f5',
        lighter: '#f1fcfb',
        accent: '#48c9b0',
        accentHover: '#1abc9c',
        gradient: 'linear-gradient(135deg, #e8f8f5 0%, #d1f2eb 100%)',
        headerGradient: 'linear-gradient(135deg, #16a085 0%, #138d75 100%)',
        name: '🌊 Turquesa'
    }
};

// Configuración de la malla - PEDAGOGÍA EN MATEMÁTICA UAH 2026
let ramosDatos = [
    // SEMESTRE 1
    {
        id: 'numeros_algebra',
        codigo: 'PED001',
        nombre: 'De los Números al Álgebra',
        creditos: 5,
        prerequisitos: [],
        semestre: 1
    },
    {
        id: 'lab_sistemas_numericos',
        codigo: 'PED002',
        nombre: 'Laboratorio de Sistemas Numéricos',
        creditos: 4,
        prerequisitos: [],
        semestre: 1
    },
    {
        id: 'intro_geometria_euclidiana',
        codigo: 'PED003',
        nombre: 'Introducción a la Geometría Euclidiana',
        creditos: 5,
        prerequisitos: [],
        semestre: 1
    },
    {
        id: 'taller_expresion_escrita',
        codigo: 'PED004',
        nombre: 'Taller de Expresión Escrita',
        creditos: 6,
        prerequisitos: [],
        semestre: 1
    },
    // SEMESTRE 2
    {
        id: 'algebra_fundamentos',
        codigo: 'PED005',
        nombre: 'Álgebra y Fundamentos',
        creditos: 6,
        prerequisitos: ['numeros_algebra', 'intro_geometria_euclidiana'],
        semestre: 2
    },
    {
        id: 'intro_computacion',
        codigo: 'PED006',
        nombre: 'Introducción a la Ciencia de la Computación y Ambientes Digitales',
        creditos: 4,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'geometria_analitica1',
        codigo: 'PED007',
        nombre: 'Geometría Analítica I',
        creditos: 6,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'taller_expresion_oral',
        codigo: 'PED008',
        nombre: 'Taller de Expresión Oral',
        creditos: 5,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'estadistica_descriptiva',
        codigo: 'PED009',
        nombre: 'Estadística Descriptiva',
        creditos: 5,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'inclusion_educativa',
        codigo: 'PED010',
        nombre: 'Inclusión Educativa',
        creditos: 5,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'intro_educacion',
        codigo: 'PED011',
        nombre: 'Introducción a la Educación',
        creditos: 6,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'optativo_teologica_2',
        codigo: 'PED012',
        nombre: 'Optativo Formación Teológica',
        creditos: 3,
        prerequisitos: [],
        semestre: 2
    },
    // SEMESTRE 3
    {
        id: 'algebra_lineal',
        codigo: 'PED013',
        nombre: 'Álgebra Lineal',
        creditos: 5,
        prerequisitos: ['algebra_fundamentos'],
        semestre: 3
    },
    {
        id: 'geometria_analitica2',
        codigo: 'PED014',
        nombre: 'Geometría Analítica II',
        creditos: 10,
        prerequisitos: ['geometria_analitica1'],
        semestre: 3
    },
    {
        id: 'analisis1',
        codigo: 'PED015',
        nombre: 'Análisis I',
        creditos: 6,
        prerequisitos: ['numeros_algebra', 'intro_geometria_euclidiana'],
        semestre: 3
    },
    {
        id: 'lab_matematica_discreta',
        codigo: 'PED016',
        nombre: 'Laboratorio de Matemática Discreta',
        creditos: 4,
        prerequisitos: [],
        semestre: 3
    },
    {
        id: 'optativo_teologica_3',
        codigo: 'PED017',
        nombre: 'Optativo Formación Teológica',
        creditos: 3,
        prerequisitos: [],
        semestre: 3
    },
    {
        id: 'optativo_general_3',
        codigo: 'PED018',
        nombre: 'Optativo Formación General',
        creditos: 3,
        prerequisitos: [],
        semestre: 3
    },
    // SEMESTRE 4
    {
        id: 'estructuras_algebraicas',
        codigo: 'PED019',
        nombre: 'Estructuras Algebraicas',
        creditos: 5,
        prerequisitos: ['algebra_lineal'],
        semestre: 4
    },
    {
        id: 'geometria_euclidiana',
        codigo: 'PED020',
        nombre: 'Geometría Euclidiana',
        creditos: 5,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'analisis2',
        codigo: 'PED021',
        nombre: 'Análisis II',
        creditos: 5,
        prerequisitos: ['analisis1'],
        semestre: 4
    },
    {
        id: 'fundamentos_didactica_matematica',
        codigo: 'PED022',
        nombre: 'Fundamentode la Didáctica de la Matemática',
        creditos: 4,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'psicologia_aprendizaje',
        codigo: 'PED023',
        nombre: 'Psicología del Aprendizaje y Ciclo Vital',
        creditos: 5,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'curriculum_planificacion',
        codigo: 'PED024',
        nombre: 'Curriculum y Planificación',
        creditos: 4,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'taller_practica_temprana1',
        codigo: 'PED025',
        nombre: 'Taller de Práctica Temprana I',
        creditos: 4,
        prerequisitos: ['intro_educacion'],
        semestre: 4
    },
    {
        id: 'optativo_general_4',
        codigo: 'PED026',
        nombre: 'Optativo Formación General',
        creditos: 3,
        prerequisitos: [],
        semestre: 4
    },
    // SEMESTRE 5
    {
        id: 'estudio_geometrias',
        codigo: 'PED027',
        nombre: 'Estudio de las Geometrías',
        creditos: 5,
        prerequisitos: ['geometria_euclidiana', 'geometria_analitica2'],
        semestre: 5
    },
    {
        id: 'probabilidades',
        codigo: 'PED028',
        nombre: 'Probabilidades',
        creditos: 5,
        prerequisitos: ['lab_matematica_discreta'],
        semestre: 5
    },
    {
        id: 'cognicion_matematica',
        codigo: 'PED029',
        nombre: 'Cognición y Matemática',
        creditos: 5,
        prerequisitos: ['fundamentos_didactica_matematica', 'psicologia_aprendizaje'],
        semestre: 5
    },
    {
        id: 'evaluacion_aprendizajes',
        codigo: 'PED030',
        nombre: 'Evaluación de los Aprendizajes',
        creditos: 5,
        prerequisitos: ['curriculum_planificacion'],
        semestre: 5
    },
    {
        id: 'taller_practica_temprana2',
        codigo: 'PED031',
        nombre: 'Taller de Práctica Temprana II',
        creditos: 4,
        prerequisitos: ['taller_practica_temprana1'],
        semestre: 5
    },
    // SEMESTRE 6
    {
        id: 'didactica_numeros_algebra',
        codigo: 'PED032',
        nombre: 'Didáctica de los Números y del Álgebra',
        creditos: 4,
        prerequisitos: ['fundamentos_didactica_matematica', 'estructuras_algebraicas'],
        semestre: 6
    },
    {
        id: 'analisis3',
        codigo: 'PED033',
        nombre: 'Análisis III',
        creditos: 6,
        prerequisitos: ['analisis2'],
        semestre: 6
    },
    {
        id: 'didactica_geometria',
        codigo: 'PED034',
        nombre: 'Didáctica de la Geometría',
        creditos: 6,
        prerequisitos: ['estudio_geometrias', 'cognicion_matematica'],
        semestre: 6
    },
    {
        id: 'estadistica_inferencial',
        codigo: 'PED035',
        nombre: 'Estadística Inferencial',
        creditos: 6,
        prerequisitos: ['probabilidades'],
        semestre: 6
    },
    {
        id: 'elab_taller_reflexion1',
        codigo: 'PED036',
        nombre: 'ELAB y Taller de Reflexión I',
        creditos: 6,
        prerequisitos: ['taller_practica_temprana2', 'evaluacion_aprendizajes'],
        semestre: 6
    },
    {
        id: 'ingles1',
        codigo: 'PED037',
        nombre: 'Inglés I',
        creditos: 6,
        prerequisitos: [],
        semestre: 6
    },
    // SEMESTRE 7
    {
        id: 'didactica_funciones_calculo',
        codigo: 'PED038',
        nombre: 'Didáctica de las Funciones y del Cálculo',
        creditos: 7,
        prerequisitos: ['didactica_numeros_algebra', 'analisis3'],
        semestre: 7
    },
    {
        id: 'programacion_pensamiento_computacional',
        codigo: 'PED039',
        nombre: 'Programación y Pensamiento Computacional para la Enseñanza de la Matemática',
        creditos: 7,
        prerequisitos: ['intro_computacion', 'didactica_numeros_algebra'],
        semestre: 7
    },
    {
        id: 'didactica_estadistica_probabilidades',
        codigo: 'PED040',
        nombre: 'Didáctica de la Estadística y de las Probabilidades',
        creditos: 7,
        prerequisitos: ['estadistica_inferencial', 'cognicion_matematica'],
        semestre: 7
    },
    {
        id: 'taller_etica_educacion',
        codigo: 'PED041',
        nombre: 'Taller de Ética y Educación',
        creditos: 5,
        prerequisitos: [],
        semestre: 7
    },
    {
        id: 'elab_taller_reflexion2',
        codigo: 'PED042',
        nombre: 'ELAB y Taller de Reflexión II',
        creditos: 6,
        prerequisitos: ['elab_taller_reflexion1', 'evaluacion_aprendizajes'],
        semestre: 7
    },
    {
        id: 'optativo_general_7',
        codigo: 'PED043',
        nombre: 'Optativo Formación Complementaria',
        creditos: 6,
        prerequisitos: [],
        semestre: 7
    },
    // SEMESTRE 8
    {
        id: 'investigacion_didactica_matematica',
        codigo: 'PED044',
        nombre: 'Investigación en Didáctica de la Matemática',
        creditos: 8,
        prerequisitos: ['didactica_funciones_calculo', 'didactica_geometria', 'didactica_estadistica_probabilidades'],
        semestre: 8
    },
    {
        id: 'realidad_educacional_chilena',
        codigo: 'PED045',
        nombre: 'Realidad Educacional Chilena',
        creditos: 8,
        prerequisitos: [],
        semestre: 8
    },
    {
        id: 'elab_taller_reflexion3',
        codigo: 'PED046',
        nombre: 'ELAB y Taller de Reflexión III',
        creditos: 8,
        prerequisitos: ['elab_taller_reflexion2', 'didactica_numeros_algebra'],
        semestre: 8
    },
    {
        id: 'ingles2',
        codigo: 'PED047',
        nombre: 'Inglés II',
        creditos: 6,
        prerequisitos: ['ingles1'],
        semestre: 8
    },
    {
        id: 'optativo_general_8',
        codigo: 'PED048',
        nombre: 'Optativo Formación Complementaria',
        creditos: 6,
        prerequisitos: [],
        semestre: 8
    },
    // SEMESTRE 9
    {
        id: 'historia_epistemologia_matematica',
        codigo: 'PED049',
        nombre: 'Historia y Epistemología de la Matemática',
        creditos: 9,
        prerequisitos: ['estudio_geometrias', 'estructuras_algebraicas', 'analisis3'],
        semestre: 9
    },
    {
        id: 'taller_diseno_didactico1',
        codigo: 'PED050',
        nombre: 'Taller de Diseño Didáctico I',
        creditos: 9,
        prerequisitos: ['investigacion_didactica_matematica'],
        semestre: 9
    },
    {
        id: 'elab_taller_reflexion4',
        codigo: 'PED051',
        nombre: 'ELAB y Taller de Reflexión IV',
        creditos: 9,
        prerequisitos: ['elab_taller_reflexion3', 'investigacion_didactica_matematica', 'realidad_educacional_chilena'],
        semestre: 9
    },
    {
        id: 'optativo_general_9',
        codigo: 'PED052',
        nombre: 'Optativo Formación Complementaria',
        creditos: 6,
        prerequisitos: [],
        semestre: 9
    },
    // SEMESTRE 10
    {
        id: 'seminario_titulacion',
        codigo: 'PED053',
        nombre: 'Seminario de Titulación',
        creditos: 10,
        prerequisitos: ['taller_diseno_didactico1', 'historia_epistemologia_matematica', 'elab_taller_reflexion4'],
        semestre: 10
    },
    {
        id: 'taller_diseno_didactico2',
        codigo: 'PED054',
        nombre: 'Taller de Diseño Didáctico II',
        creditos: 10,
        prerequisitos: ['taller_diseno_didactico1'],
        semestre: 10
    },
    {
        id: 'elab_practica_profesional',
        codigo: 'PED055',
        nombre: 'ELAB y Práctica Profesional',
        creditos: 10,
        prerequisitos: ['elab_taller_reflexion4', 'taller_diseno_didactico1'],
        semestre: 10
    }
];

// Variable para detectar primera vez
let primeraVez = true;
let ramoCompletado = {};
let ramoPromedios = {}; // Guardar promedios de cada asignatura
let temaActual = 'blue'; // Iniciar con azul por defecto
let mallaInfo = {
    titulo: '🎓 Mi Carrera',
    subtitulo: 'Mi Malla Didáctica',
    emoji: '🎓'
};
let ramoEditandoId = null;
let ramoEditandoPromedioId = null;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    aplicarTema(temaActual);
    
    // Mostrar pantalla de bienvenida si es primera vez
    if (primeraVez && ramosDatos.length === 0) {
        mostrarBienvenida();
    } else {
        ocultarBienvenida();
    }
    
    renderizarMalla();
    actualizarContadores();
    actualizarGraficoCreditos();
    configurarEventos();
});

// Configurar eventos
function configurarEventos() {
    // Botón de inicio en la pantalla de bienvenida
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', ocultarBienvenida);
    }

    document.getElementById('themeSelector').addEventListener('change', (e) => {
        temaActual = e.target.value;
        aplicarTema(temaActual);
        guardarDatos();
    });

    document.getElementById('resetBtn').addEventListener('click', reiniciarProgreso);
    document.getElementById('editBtn').addEventListener('click', abrirEditModal);
    document.getElementById('closeEditModal').addEventListener('click', cerrarEditModal);
    document.getElementById('cancelEditBtn').addEventListener('click', cerrarEditModal);
    document.getElementById('saveEditBtn').addEventListener('click', guardarEdicionMalla);
    document.getElementById('addRamoBtn').addEventListener('click', abrirRamoModalNuevo);
    document.getElementById('closeRamoModal').addEventListener('click', cerrarRamoModal);
    document.getElementById('cancelRamoBtn').addEventListener('click', cerrarRamoModal);
    document.getElementById('saveRamoBtn').addEventListener('click', guardarRamo);
    document.getElementById('deleteRamoBtn').addEventListener('click', eliminarRamo);
    document.getElementById('exportBtn').addEventListener('click', exportarMalla);
    document.getElementById('importBtn').addEventListener('click', () => document.getElementById('fileInput').click());
    document.getElementById('fileInput').addEventListener('change', importarMalla);
    
    // Eventos del modal de promedio
    const closePromedioModal = document.getElementById('closePromedioModal');
    const cancelPromedioBtn = document.getElementById('cancelPromedioBtn');
    const savePromedioBtn = document.getElementById('savePromedioBtn');
    
    if (closePromedioModal) closePromedioModal.addEventListener('click', cerrarPromedioModal);
    if (cancelPromedioBtn) cancelPromedioBtn.addEventListener('click', cerrarPromedioModal);
    if (savePromedioBtn) savePromedioBtn.addEventListener('click', guardarPromedio);
    
    // Eventos de emojis
    document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('emojiInput').value = e.target.dataset.emoji;
        });
    });
}

// Aplicar tema
function aplicarTema(nombreTema) {
    const tema = temas[nombreTema];
    document.documentElement.style.setProperty('--color-primary', tema.primary);
    document.documentElement.style.setProperty('--color-secondary', tema.secondary);
    document.documentElement.style.setProperty('--color-light', tema.light);
    document.documentElement.style.setProperty('--color-lighter', tema.lighter);
    document.documentElement.style.setProperty('--color-accent', tema.accent);
    document.documentElement.style.setProperty('--color-accent-hover', tema.accentHover);
    document.documentElement.style.setProperty('--gradient', tema.gradient);
    document.documentElement.style.setProperty('--header-gradient', tema.headerGradient);
    renderizarMalla();
}

// ===== FUNCIONES DE BIENVENIDA =====
function mostrarBienvenida() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.classList.remove('hidden');
    }
}

function ocultarBienvenida() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
    }
    primeraVez = false;
    guardarDatos();
}

// ===== FUNCIONES DE PROMEDIO =====
function abrirPromedioModal(ramoId) {
    ramoEditandoPromedioId = ramoId;
    const ramo = ramosDatos.find(r => r.id === ramoId);
    
    if (ramo) {
        document.getElementById('ramoPromedioNombre').textContent = ramo.nombre;
        document.getElementById('promedioInput').value = ramoPromedios[ramoId] || '';
        document.getElementById('promedioModal').style.display = 'flex';
    }
}

function cerrarPromedioModal() {
    document.getElementById('promedioModal').style.display = 'none';
    ramoEditandoPromedioId = null;
}

function guardarPromedio() {
    const promedio = parseFloat(document.getElementById('promedioInput').value);
    
    if (isNaN(promedio) || promedio < 1 || promedio > 7) {
        alert('Por favor ingresa un promedio válido entre 1.0 y 7.0');
        return;
    }
    
    if (ramoEditandoPromedioId) {
        ramoPromedios[ramoEditandoPromedioId] = promedio;
        guardarDatos();
        cerrarPromedioModal();
        renderizarMalla();
        actualizarGraficoCreditos();
    }
}

// Renderizar la malla
function renderizarMalla() {
    const mallaGrid = document.getElementById('mallaGrid');
    mallaGrid.innerHTML = '';

    // Ordenar por semestre
    const ramosPorSemestre = {};
    ramosDatos.forEach(ramo => {
        if (!ramosPorSemestre[ramo.semestre]) {
            ramosPorSemestre[ramo.semestre] = [];
        }
        ramosPorSemestre[ramo.semestre].push(ramo);
    });

    // Renderizar semestres como columnas
    const maxSemestre = Math.max(...ramosDatos.map(r => r.semestre));
    for (let sem = 1; sem <= maxSemestre; sem++) {
        if (ramosPorSemestre[sem]) {
            const divSemestre = document.createElement('div');
            divSemestre.className = 'semestre-columna';
            
            const titulo = document.createElement('div');
            titulo.className = 'semestre-titulo';
            titulo.textContent = `SEM ${sem}`;
            divSemestre.appendChild(titulo);

            ramosPorSemestre[sem].forEach(ramo => {
                const ramoElement = crearElementoRamo(ramo);
                divSemestre.appendChild(ramoElement);
            });

            mallaGrid.appendChild(divSemestre);
        }
    }
}

// Crear elemento de ramo
function crearElementoRamo(ramo) {
    const div = document.createElement('div');
    const completado = ramoCompletado[ramo.id] || false;
    const bloqueado = estasBloqueado(ramo);
    const promedio = ramoPromedios[ramo.id];
    
    div.className = 'ramo';
    if (completado) div.classList.add('completed');
    if (bloqueado) div.classList.add('locked');

    const prerequisitosTexto = ramo.prerequisitos.length > 0
        ? `Requiere: ${ramo.prerequisitos.join(', ')}`
        : 'Sin prerequisitos';

    div.innerHTML = `
        <div class="ramo-header">
            <div class="ramo-code">${ramo.codigo}</div>
            <div class="checkbox"></div>
        </div>
        <div class="ramo-name">${ramo.nombre}</div>
        <div class="ramo-credits">${ramo.creditos} créditos</div>
        <div class="ramo-prerequisites">${prerequisitosTexto}</div>
        ${completado && promedio ? `<div class="ramo-promedio">Promedio: ${promedio}</div>` : ''}
        <div class="status-badge ${completado ? '' : bloqueado ? 'status-locked' : 'status-available'}">
            ${completado ? '✓ Completado' : bloqueado ? '🔒 Bloqueado' : '📖 Disponible'}
        </div>
    `;

    // Evento click
    if (!bloqueado) {
        div.addEventListener('click', () => toggleRamo(ramo.id));
    }

    return div;
}

// Verificar si un ramo está bloqueado
function estasBloqueado(ramo) {
    return ramo.prerequisitos.some(prereq => !ramoCompletado[prereq]);
}

// Toggle completitud de ramo
function toggleRamo(ramoId) {
    if (!ramoCompletado[ramoId]) {
        // Al marcar como completado, abrir modal de promedio
        ramoCompletado[ramoId] = true;
        guardarDatos();
        renderizarMalla();
        actualizarContadores();
        abrirPromedioModal(ramoId);
    } else {
        // Al desmarcar, solo desmarcar sin pedir promedio
        ramoCompletado[ramoId] = false;
        delete ramoPromedios[ramoId];
        guardarDatos();
        renderizarMalla();
        actualizarContadores();
        actualizarGraficoCreditos();
    }
}

// Actualizar contadores
function actualizarContadores() {
    const completados = Object.values(ramoCompletado).filter(v => v).length;
    const total = ramosDatos.length;
    
    document.getElementById('completedCount').textContent = completados;
    document.getElementById('totalCount').textContent = total;
}

// Reiniciar progreso
function reiniciarProgreso() {
    if (confirm('¿Estás segura de que quieres reiniciar tu progreso?')) {
        ramoCompletado = {};
        guardarDatos();
        renderizarMalla();
        actualizarContadores();
    }
}

// ===== FUNCIONES DE EDICIÓN =====

// Abrir modal de edición
function abrirEditModal() {
    document.getElementById('emojiInput').value = mallaInfo.emoji || '🎓';
    document.getElementById('titleInput').value = mallaInfo.titulo.replace(/^[^\w\s]*\s*/, '').trim();
    document.getElementById('subtitleInput').value = mallaInfo.subtitulo;
    renderizarListaRamos();
    document.getElementById('editModal').classList.add('active');
}

// Cerrar modal de edición
function cerrarEditModal() {
    document.getElementById('editModal').classList.remove('active');
}

// Renderizar lista de ramos en el modal
function renderizarListaRamos() {
    const ramosList = document.getElementById('ramosList');
    ramosList.innerHTML = '';

    ramosDatos.forEach(ramo => {
        const div = document.createElement('div');
        div.className = 'ramo-item';
        div.innerHTML = `
            <div class="ramo-item-info">
                <strong>${ramo.codigo}</strong> - ${ramo.nombre}
                <small>Semestre ${ramo.semestre} | ${ramo.creditos} créditos</small>
            </div>
            <button class="btn-edit-ramo" data-id="${ramo.id}">✏️</button>
        `;
        
        div.querySelector('.btn-edit-ramo').addEventListener('click', () => {
            abrirRamoModalEditar(ramo.id);
        });
        
        ramosList.appendChild(div);
    });
}

// Variables para edición de ramo
let ramoEditandoId = null;

// Abrir modal para nuevo ramo
function abrirRamoModalNuevo() {
    ramoEditandoId = null;
    document.getElementById('ramoModalTitle').textContent = 'Agregar Nueva Materia';
    document.getElementById('ramoCode').value = '';
    document.getElementById('ramoName').value = '';
    document.getElementById('ramoCreditos').value = '';
    document.getElementById('ramoSemestre').value = '';
    document.getElementById('ramoPrerequisitos').value = '';
    document.getElementById('deleteRamoBtn').style.display = 'none';
    document.getElementById('ramoModal').classList.add('active');
}

// Abrir modal para editar ramo
function abrirRamoModalEditar(ramoId) {
    ramoEditandoId = ramoId;
    const ramo = ramosDatos.find(r => r.id === ramoId);
    
    if (!ramo) return;
    
    document.getElementById('ramoModalTitle').textContent = 'Editar Materia';
    document.getElementById('ramoCode').value = ramo.codigo;
    document.getElementById('ramoName').value = ramo.nombre;
    document.getElementById('ramoCreditos').value = ramo.creditos;
    document.getElementById('ramoSemestre').value = ramo.semestre;
    document.getElementById('ramoPrerequisitos').value = ramo.prerequisitos.join(', ');
    document.getElementById('deleteRamoBtn').style.display = 'inline-block';
    document.getElementById('ramoModal').classList.add('active');
}

// Cerrar modal de ramo
function cerrarRamoModal() {
    document.getElementById('ramoModal').classList.remove('active');
    ramoEditandoId = null;
}

// Guardar ramo
function guardarRamo() {
    const codigo = document.getElementById('ramoCode').value.trim();
    const nombre = document.getElementById('ramoName').value.trim();
    const creditos = parseInt(document.getElementById('ramoCreditos').value) || 0;
    const semestre = parseInt(document.getElementById('ramoSemestre').value) || 1;
    const prerequisitosTexto = document.getElementById('ramoPrerequisitos').value.trim();
    const prerequisitos = prerequisitosTexto ? prerequisitosTexto.split(',').map(p => p.trim()) : [];

    if (!codigo || !nombre || creditos <= 0) {
        alert('Por favor completa todos los campos correctamente');
        return;
    }

    if (ramoEditandoId) {
        // Editar ramo existente
        const ramo = ramosDatos.find(r => r.id === ramoEditandoId);
        if (ramo) {
            ramo.codigo = codigo;
            ramo.nombre = nombre;
            ramo.creditos = creditos;
            ramo.semestre = semestre;
            ramo.prerequisitos = prerequisitos;
        }
    } else {
        // Crear nuevo ramo
        const nuevoId = 'ramo_' + Date.now();
        ramosDatos.push({
            id: nuevoId,
            codigo,
            nombre,
            creditos,
            semestre,
            prerequisitos
        });
    }

    guardarDatos();
    cerrarRamoModal();
    renderizarListaRamos();
    renderizarMalla();
}

// Eliminar ramo
function eliminarRamo() {
    if (!ramoEditandoId) return;
    
    if (confirm('¿Estás segura de que quieres eliminar esta materia?')) {
        ramosDatos = ramosDatos.filter(r => r.id !== ramoEditandoId);
        delete ramoCompletado[ramoEditandoId];
        guardarDatos();
        cerrarRamoModal();
        renderizarListaRamos();
        renderizarMalla();
        actualizarContadores();
    }
}

// Guardar edición de malla
function guardarEdicionMalla() {
    const emoji = document.getElementById('emojiInput').value.trim() || '🎓';
    const nombreCarrera = document.getElementById('titleInput').value.trim();
    
    if (!nombreCarrera) {
        alert('Por favor ingresa el nombre de la carrera');
        return;
    }
    
    mallaInfo.emoji = emoji;
    mallaInfo.titulo = emoji + ' ' + nombreCarrera;
    mallaInfo.subtitulo = document.getElementById('subtitleInput').value.trim();
    
    document.getElementById('mallaTitle').textContent = mallaInfo.titulo;
    document.getElementById('mallaSubtitle').textContent = mallaInfo.subtitulo;
    
    guardarDatos();
    cerrarEditModal();
}

// ===== FUNCIONES DE EXPORTAR/IMPORTAR =====

// Exportar malla
function exportarMalla() {
    const datos = {
        info: mallaInfo,
        ramos: ramosDatos,
        tema: temaActual
    };

    const json = JSON.stringify(datos, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `malla_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Importar malla
function importarMalla(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const datos = JSON.parse(e.target.result);
            
            if (datos.info && datos.ramos) {
                mallaInfo = datos.info;
                ramosDatos = datos.ramos;
                temaActual = datos.tema || 'default';
                ramoCompletado = {};

                document.getElementById('mallaTitle').textContent = mallaInfo.titulo;
                document.getElementById('mallaSubtitle').textContent = mallaInfo.subtitulo;
                document.getElementById('themeSelector').value = temaActual;
                
                aplicarTema(temaActual);
                renderizarMalla();
                actualizarContadores();
                guardarDatos();
                
                alert('¡Malla importada correctamente!');
            } else {
                alert('El archivo no tiene el formato correcto');
            }
        } catch (error) {
            alert('Error al importar el archivo: ' + error.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== PERSISTENCIA =====

// Actualizar gráfico de créditos
function actualizarGraficoCreditos() {
    const totalCreditos = ramosDatos.reduce((sum, ramo) => sum + ramo.creditos, 0);
    const creditosCompletados = ramosDatos
        .filter(ramo => ramoCompletado[ramo.id])
        .reduce((sum, ramo) => sum + ramo.creditos, 0);
    
    const creditosPendientes = totalCreditos - creditosCompletados;
    const porcentaje = totalCreditos > 0 ? Math.round((creditosCompletados / totalCreditos) * 100) : 0;
    
    // Calcular promedio general
    const ramoCompletados = ramosDatos.filter(ramo => ramoCompletado[ramo.id]);
    let promedioGeneral = '-';
    if (ramoCompletados.length > 0) {
        const sumaPromedios = ramoCompletados.reduce((sum, ramo) => {
            return sum + (ramoPromedios[ramo.id] || 0);
        }, 0);
        promedioGeneral = (sumaPromedios / ramoCompletados.length).toFixed(1);
    }
    
    // Actualizar elementos de información
    document.getElementById('totalCreditos').textContent = totalCreditos;
    document.getElementById('creditosCompletados').textContent = creditosCompletados;
    document.getElementById('porcentajeCompletado').textContent = porcentaje + '%';
    document.getElementById('promedioGeneral').textContent = promedioGeneral;
    
    // Crear gráfico con Chart.js
    const ctx = document.getElementById('creditosChart');
    if (ctx) {
        // Destruir gráfico anterior si existe
        if (window.creditosChartInstance) {
            window.creditosChartInstance.destroy();
        }
        
        window.creditosChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Completados', 'Pendientes'],
                datasets: [{
                    data: [creditosCompletados, creditosPendientes],
                    backgroundColor: [
                        'rgba(52, 211, 153, 0.8)',
                        'rgba(209, 213, 219, 0.5)'
                    ],
                    borderColor: [
                        'rgba(16, 185, 129, 1)',
                        'rgba(156, 163, 175, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { size: 14 },
                            padding: 15
                        }
                    }
                }
            }
        });
    }
}

// Guardar todos los datos
function guardarDatos() {
    const datos = {
        info: mallaInfo,
        ramos: ramosDatos,
        tema: temaActual,
        completados: ramoCompletado,
        promedios: ramoPromedios,
        primeraVez: primeraVez
    };
    localStorage.setItem('mallaCompleta', JSON.stringify(datos));
}

// Cargar todos los datos
function cargarDatos() {
    const guardado = localStorage.getItem('mallaCompleta');
    if (guardado) {
        try {
            const datos = JSON.parse(guardado);
            mallaInfo = datos.info || mallaInfo;
            ramosDatos = datos.ramos || [];
            temaActual = datos.tema || 'blue';
            ramoCompletado = datos.completados || {};
            ramoPromedios = datos.promedios || {};
            primeraVez = datos.primeraVez !== false;
            
            document.getElementById('mallaTitle').textContent = mallaInfo.titulo;
            document.getElementById('mallaSubtitle').textContent = mallaInfo.subtitulo;
            document.getElementById('themeSelector').value = temaActual;
        } catch (error) {
            console.error('Error al cargar datos:', error);
        }
    } else {
        // Primera vez: inicializar con array vacío
        ramosDatos = [];
        temaActual = 'blue';
        primeraVez = true;
    }
}


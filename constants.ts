import { Topic } from './types';

export const LEGAL_CONTEXT = `
Derecho Comercial en Colombia:
El derecho comercial en Colombia constituye un conjunto de normas jurídicas encargadas de regular los actos de comercio, a los comerciantes y a las actividades empresariales. Su fundamento principal es el Código de Comercio, complementado por leyes mercantiles especiales y la jurisprudencia.

1. Naturaleza del Derecho Comercial:
Es una rama del derecho privado caracterizada por su dinamismo, flexibilidad y orientación hacia la actividad económica. Su finalidad es garantizar seguridad jurídica en relaciones mercantiles, facilitando el tráfico económico y promoviendo la eficiencia.

2. Sujetos del Derecho Comercial:
- Comerciante: Persona natural o jurídica que profesionalmente realiza actividades mercantiles. Debe cumplir deberes como matrícula mercantil, llevar contabilidad y conservar correspondencia.
- Empresario: Concepto moderno que abarca a quien dirige una empresa, independientemente de su calidad formal como comerciante.

3. Actos de Comercio:
El Código de Comercio enumera actos mercantiles como adquisición de bienes para reventa, operaciones bancarias, actos de sociedades comerciales e intermediación de bienes/servicios. Un acto es mercantil cuando está vinculado a la actividad empresarial.

4. Sociedades Mercantiles:
Figuras del régimen societario: Sociedad Anónima, Sociedad por Acciones Simplificada (SAS), Limitada, Colectiva y Comanditaria. La SAS destaca por su flexibilidad, responsabilidad limitada y simplicidad administrativa.

5. Contratos Mercantiles:
Acuerdos orientados a la actividad económica regulados en el Código de Comercio. Incluyen: compraventa comercial, suministro, mandato mercantil, transporte, agencia, distribución, franquicia, arrendamiento mercantil y contratos bancarios.

6. Títulos Valores:
Representan derechos incorporados al documento. Ejemplos: letra de cambio, pagaré, cheque, certificados de depósito, bono de prenda. Características: literalidad, autonomía e incorporación.

7. Insolvencia Empresarial:
Ley 1116 de 2006. Régimen aplicable a comerciantes y personas jurídicas. Objetivo: recuperación empresarial o liquidación ordenada, protegiendo el crédito y la continuidad económica.

8. Propiedad Industrial y Competencia:
- Propiedad Industrial: Patentes, diseños, marcas, lemas (Registro ante la SIC).
- Protección a la Competencia: Prohíbe prácticas restrictivas, acuerdos anticompetitivos, abuso de posición dominante y competencia desleal.

9. Comercio Electrónico:
Ley 527 de 1999. Otorga validez jurídica a mensajes de datos, firmas digitales y contratos electrónicos.

10. Conclusiones:
Sistema robusto orientado a la protección del tráfico económico y seguridad jurídica.
`;

export const TOPICS: Topic[] = [
  {
    id: 'intro',
    title: 'Naturaleza General',
    description: 'Conceptos básicos y finalidad del derecho comercial.',
    icon: '⚖️',
    prompt: 'Explícame brevemente qué es el Derecho Comercial en Colombia y cuál es su naturaleza.'
  },
  {
    id: 'subjects',
    title: 'Sujetos y Comerciantes',
    description: 'Quiénes son comerciantes y sus obligaciones legales.',
    icon: 'busts_in_silhouette',
    prompt: '¿Quién es considerado comerciante en Colombia y cuáles son sus obligaciones principales?'
  },
  {
    id: 'societies',
    title: 'Sociedades (SAS, S.A.)',
    description: 'Tipos de sociedades, con énfasis en la SAS.',
    icon: 'office_building',
    prompt: '¿Cuáles son los tipos de sociedades mercantiles en Colombia? Háblame específicamente de la SAS.'
  },
  {
    id: 'contracts',
    title: 'Contratos Mercantiles',
    description: 'Tipos de contratos como franquicia, agencia y suministro.',
    icon: 'handshake',
    prompt: '¿Qué tipos de contratos mercantiles existen en Colombia y qué regulan?'
  },
  {
    id: 'insolvency',
    title: 'Insolvencia (Ley 1116)',
    description: 'Procesos de recuperación y liquidación empresarial.',
    icon: 'chart_with_downwards_trend',
    prompt: 'Explícame el régimen de insolvencia empresarial según la Ley 1116 de 2006.'
  },
  {
    id: 'ecommerce',
    title: 'Comercio Electrónico',
    description: 'Ley 527 de 1999 y validez de firmas digitales.',
    icon: 'computer',
    prompt: '¿Cómo regula la Ley 527 de 1999 el comercio electrónico en Colombia?'
  }
];
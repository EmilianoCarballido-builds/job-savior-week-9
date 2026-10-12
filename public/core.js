export const task = Object.freeze({id:'cash-mx-v1', fictional:true, opening:1000, sales:850, expenses:320, credit:200, rubric:['Cálculo de caja','Adaptación al cambio','Explicación y comprobante','Ayuda declarada']});
export function validateAnswer(a){
 if(!a || typeof a.amount!=='number' || !Number.isFinite(a.amount) || a.amount<0 || a.amount>1000000) throw Error('Escribe un monto entre 0 y 1,000,000, sin símbolos.');
 if(typeof a.explanation!=='string' || a.explanation.trim().length<10 || a.explanation.length>1200) throw Error('Explica tu cálculo en 10 a 1,200 caracteres.');
 return {amount:a.amount,explanation:a.explanation.trim()};
}
export function validatePayload(p){
 if(!p || p.consent!==true) throw Error('Falta tu permiso para procesar este ejercicio ficticio.');
 if(!['none','calculator','ai','person'].includes(p.assistance)) throw Error('Indica qué ayuda utilizaste.');
 return {consent:true,initial:validateAnswer(p.initial),revision:validateAnswer(p.revision),assistance:p.assistance};
}
export function compare(p){return {initial:p.initial.amount===task.opening+task.sales-task.expenses,revision:p.revision.amount===task.opening+task.sales-task.expenses-task.credit};}
export function simulation(p,reason='Demo sin llamada a un modelo'){
 const matches=compare(p);
 return {mode:'simulated',label:'RETROALIMENTACIÓN SIMULADA · NO ES UNA EVALUACIÓN LLM',reason,matches,comment:'Guía de revisión: la caja inicial más cobros menos gastos da $1,530. Al excluir $200 aún no cobrados, queda $1,330. Explica por qué una venta a crédito no aumenta el efectivo y qué comprobante revisarías. Una persona debe revisar tu razonamiento; estas comparaciones no prueban tu capacidad.'};
}
export function evidence(p,feedback,correction,consent){
 if(!consent) throw Error('Autoriza la descarga antes de exportar.');
 if(typeof correction!=='string'||correction.length>1200)throw Error('La corrección admite hasta 1,200 caracteres.');
 return {schemaVersion:1,createdAt:new Date().toISOString(),status:'UNVERIFIED_SIMULATION',task,submission:validatePayload(p),feedback, candidateCorrection:correction, humanReview:{status:'PENDING',namedReviewer:null,identityVerified:false,observedRevision:false},sharing:'Local download only. Candidate permission required for each subsequent share. No hiring decision.'};
}

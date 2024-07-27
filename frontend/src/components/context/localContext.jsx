// Inicia o local store com informações base.
export const localContextStart = () => {
    localStorage.setItem('notification', JSON.stringify({ visible: true }))
    localStorage.setItem('music', JSON.stringify({ muted: false }))
}

// Apaga todas as informações do local storage. 
export const localContextEnd = () => {
    localStorage.clear()
}

// Pega uma informação dentro de um contexto (json no local storage).
export const localContextGetInfo = (context, info) => {
    let contextToken = localStorage.getItem(context)
    if (contextToken) {
        const selected_context = JSON.parse(contextToken);
        return selected_context[info]
    }
    else {
        return ""
    }
}

// Atualiza o valor de uma informação dentro de um contexto (json no local storage).
export const localContextUpdateInfo = (context, info, new_value) => {
    let selected_context = localContextGetContext(context)
    if (selected_context) {
        selected_context[info] = new_value
        localStorage.setItem(context, JSON.stringify(selected_context))
    }
}

// Retorna o contexto, no formato de um json.
const localContextGetContext = (context) => {
    let contextToken = localStorage.getItem(context)
    if (contextToken) {
        return JSON.parse(contextToken);
    }
    else {
        return null
    }
}
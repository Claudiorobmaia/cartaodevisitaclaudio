const porId = (id) => document.getElementById(id);

document.title = CLIENTE.tituloDaPagina;
document.documentElement.style.setProperty("--cor-principal", CLIENTE.cores.principal);
document.documentElement.style.setProperty("--cor-destaque", CLIENTE.cores.destaque);
document.documentElement.style.setProperty("--cor-fundo", CLIENTE.cores.fundo);

porId("categoria").textContent = CLIENTE.categoria;
porId("titulo").textContent = CLIENTE.titulo;
porId("nome").textContent = CLIENTE.nome;
porId("telefone").textContent = CLIENTE.telefoneExibido;
porId("email").textContent = CLIENTE.email;
porId("localizacao").textContent = CLIENTE.localizacao;
porId("servicos").textContent = CLIENTE.servicos;

porId("foto-capa").style.backgroundImage = `url('${CLIENTE.imagemCapa}')`;
porId("foto-capa").setAttribute("aria-label", `Imagem de capa de ${CLIENTE.titulo}`);
porId("foto-veiculo").src = CLIENTE.imagemVeiculo;

porId("link-whatsapp").href = `https://wa.me/${CLIENTE.whatsapp}?text=${encodeURIComponent(CLIENTE.mensagemWhatsApp)}`;
porId("link-email").href = `mailto:${CLIENTE.email}`;
porId("link-localizacao").href = CLIENTE.linkLocalizacao;

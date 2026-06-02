# Guia de Deploy Automático (GitHub -> HostGator)

Este projeto está configurado para realizar deploy automático do site compilado (`app/dist`) diretamente para o servidor da HostGator via FTP sempre que novos códigos forem enviados para a branch `main` no GitHub.

---

## 🛠️ Passo 1: Configurar as Credenciais no GitHub (Secrets)

Para que o GitHub Actions possa se conectar ao seu servidor HostGator com segurança sem expor suas senhas, você deve cadastrá-las no repositório do GitHub seguindo os passos abaixo:

1. Acesse o seu repositório no **GitHub**.
2. Vá em **Settings** (Configurações) no menu superior.
3. No menu lateral esquerdo, clique em **Secrets and variables** e depois em **Actions**.
4. Clique no botão verde **New repository secret**.
5. Crie os três segredos abaixo com as suas credenciais do FTP HostGator:

| Nome do Segredo (Name) | Valor (Value) | Exemplo |
| :--- | :--- | :--- |
| `FTP_SERVER` | O servidor FTP fornecido pela HostGator | `ftp.seu-dominio.com.br` ou o IP do servidor |
| `FTP_USERNAME` | O seu usuário de FTP do cPanel | `seuusuario@seu-dominio.com.br` |
| `FTP_PASSWORD` | A senha do seu usuário de FTP | `sua-senha-segura` |

---

## 🚀 Passo 2: Como subir atualizações e disparar o Deploy

Sempre que fizer alterações no site localmente, basta executar os comandos padrão do Git para enviar as modificações. O deploy iniciará sozinho.

```bash
# Adicionar alterações ao Git
git add .

# Criar o commit explicando o que mudou
git commit -m "feat: minha nova atualização no site"

# Enviar para o GitHub (isso dispara o deploy automaticamente)
git push origin main
```

---

## 🔍 Passo 3: Como acompanhar o Deploy

1. Acesse a aba **Actions** no seu repositório do GitHub.
2. Você verá uma lista de execuções com o nome do seu commit.
3. Clique na execução em andamento (com círculo amarelo) para ver o console e os logs de upload em tempo real.
4. Quando o círculo ficar verde, o deploy foi concluído com sucesso e o site estará atualizado na web!

---

## 📂 Diretório de Destino (HostGator)

O workflow está configurado por padrão para enviar os arquivos da pasta `./app/dist/` para a pasta `./public_html/` no seu servidor. 

Se o seu site estiver em um subdomínio ou subpasta específica (ex: `/public_html/novo-site`), você pode alterar o campo `server-dir` no arquivo `.github/workflows/deploy.yml`:

```yaml
server-dir: ./public_html/sua-subpasta/
```

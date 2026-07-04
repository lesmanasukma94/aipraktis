const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "content", "blog");

const files = fs.readdirSync(BLOG_DIR);

let changed = 0;

function getCategory(slug){

// =====================================
// BELAJAR AI
// =====================================

if(
slug.includes("apa-itu")||
slug.includes("roadmap-belajar-ai")||
slug.includes("cara-belajar-ai")||
slug.includes("belajar-ai")||
slug.includes("artificial-intelligence")||
slug.includes("ai-untuk-pemula")||
slug.includes("kesalahan-pemula")||
slug.includes("apakah-ai")||
slug.includes("pekerjaan-yang-akan")||
slug.includes("pekerjaan-yang-tidak")
)
return "belajar-ai";

// =====================================
// AI CHATBOT
// =====================================

if(
slug.includes("chatgpt")||
slug.includes("gemini")||
slug.includes("claude")||
slug.includes("deepseek")||
slug.includes("grok")||
slug.includes("copilot")||
slug.includes("perplexity")||
slug.includes("cursor")||
slug.includes("github-copilot")
)
return "ai-chatbot";

// =====================================
// PROMPT
// =====================================

if(
slug.includes("prompt")
)
return "prompt-engineering";

// =====================================
// TOOLS
// =====================================

if(
slug.startsWith("tools-ai")||
slug.includes("alternatif-chatgpt")
)
return "ai-tools";

// =====================================
// TUTORIAL
// =====================================

if(
slug.startsWith("cara-")
)
return "tutorial-ai";

// =====================================
// BISNIS
// =====================================

if(
slug.includes("umkm")||
slug.includes("marketing")||
slug.includes("sales")||
slug.includes("customer-service")||
slug.includes("customer-support")||
slug.includes("hrd")||
slug.includes("rekrutmen")||
slug.includes("bisnis")||
slug.includes("keuangan")||
slug.includes("penjualan")||
slug.includes("jasa-profesional")||
slug.includes("toko-online")||
slug.includes("fashion")||
slug.includes("kuliner")
)
return "ai-untuk-bisnis";

// =====================================
// PENDIDIKAN
// =====================================

if(
slug.includes("guru")||
slug.includes("mahasiswa")||
slug.includes("siswa")||
slug.includes("skripsi")||
slug.includes("penelitian")||
slug.includes("pendidikan")
)
return "ai-untuk-pendidikan";

// =====================================
// CONTENT CREATOR
// =====================================

if(
slug.includes("youtube")||
slug.includes("tiktok")||
slug.includes("instagram")||
slug.includes("blogging")||
slug.includes("content-creator")||
slug.includes("menulis-artikel")
)
return "ai-untuk-content-creator";

// =====================================
// KARIER
// =====================================

if(
slug.includes("consultant")||
slug.includes("specialist")||
slug.includes("trainer")||
slug.includes("prompt-engineer")||
slug.includes("freelancer")||
slug.includes("sertifikasi")||
slug.includes("skill-ai")||
slug.includes("prospek-kerja")
)
return "karier-ai";

// =====================================
// STUDI KASUS
// =====================================

if(
slug.includes("studi-kasus")
)
return "studi-kasus-ai";

// default

return null;

}

for(const file of files){

if(!file.endsWith(".md")) continue;

const slug=file.replace(".md","");

const category=getCategory(slug);

if(!category) continue;

const filePath=path.join(BLOG_DIR,file);

let content=fs.readFileSync(filePath,"utf8");

content=content.replace(
/category:\s*"([^"]+)"/,
`category: "${category}"`
);

fs.writeFileSync(filePath,content);

changed++;

}

console.log(`✅ ${changed} artikel diperbarui.`);
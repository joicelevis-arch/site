:root{
  --bg:#f4f7fb;
  --accent:#1f6feb;
  --text:#14202b;
  --muted:#556980;
  --light-square:#f0d9b5;
  --dark-square:#b58863;
  --card:#fff;
  --container:1100px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
}

*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);line-height:1.5}
.container{max-width:var(--container);margin:0 auto;padding:1rem}
.site-header{background:#fff;border-bottom:1px solid #e6edf3}
.header-row{display:flex;align-items:center;justify-content:space-between}
.logo{margin:0;font-size:1.25rem;color:var(--accent)}
.nav a{margin-left:1rem;color:var(--muted);text-decoration:none}
.hero{padding:2.5rem 0;background:linear-gradient(90deg, rgba(31,111,235,0.06), transparent);border-bottom:1px solid #e9f0f8}
.hero h2{margin:0 0 .5rem;font-size:1.5rem}
.section{padding:1.5rem 0}
.board-section .board-wrapper{display:flex;gap:1rem;align-items:flex-start}
.board{width:480px;height:480px;display:grid;grid-template-columns:repeat(8,1fr);border-radius:8px;overflow:hidden;box-shadow:0 8px 24px rgba(20,32,43,0.08)}
.square{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:28px;cursor:pointer;user-select:none;position:relative}
.square.light{background:var(--light-square)}
.square.dark{background:var(--dark-square);color:#fff}
.square.highlight{outline:4px solid rgba(255,255,0,0.45)}
.piece{font-size:30px}
.sidepanel{width:320px;background:var(--card);border-radius:10px;padding:1rem;box-shadow:0 8px 30px rgba(16,24,40,0.06)}
.toggle{display:flex;align-items:center;gap:.6rem;margin:.5rem 0}
.persona{margin-top:1rem}
.personas-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;margin-top:1rem}
.persona-card{background:var(--card);padding:1rem;border-radius:10px;box-shadow:0 8px 24px rgba(20,32,43,0.05);text-align:center}
.persona-card .emoji{font-size:32px}
.detailed-tips{max-width:800px}
@media(max-width:900px){
  .board-section .board-wrapper{flex-direction:column;align-items:center}
  .sidepanel{width:100%}
  .board{width:360px;height:360px}
}
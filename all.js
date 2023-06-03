const choose=document.querySelector(".choose")

let AIspace=[]

function tool(item){
    return`
    <li class="card">
    <div class="cover"> 
    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool1.png" alt="Chatbot Builder">			</div>
    <div class="border">

    <h3>Chatbot Builder</h3>
    <p>建立智能化的機器人，解答常見問題、提供客戶支援、收集反饋等。</p>
    </div>
    <div class="nav">
      <h4>AI模型</h4>
      <span>卡卡</span>
    </div>
    <div class="tag">
      <a href="#">#聊天</a>
        <div class="button"><span class="material-symbols-outlined">
move_group
</span></div>
    </div>
  </li>`
}

function HistoryUI(){


    const rightsidebar = document.getElementById('sidebar-r');
    rightsidebar.innerHTML = `<div class=heading>History</div><div class=content>
      
    </div>`;

    function listTile(historyobj) {
        return `<div class = "tile">
                   <div class = ">${historyobj}</div>`
    }

}

export default HistoryUI;


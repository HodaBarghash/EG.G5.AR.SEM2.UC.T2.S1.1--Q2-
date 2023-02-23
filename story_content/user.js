function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5UkVNRWEd3X":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5wYQCYhEdnq-Txcma4a69RB4rseBwFKch8Ayhbmnjl-VkC2_tj84yfD-sU_GM9M4NVQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


const dataatual=new date();
let dataobjetivo=prompt("data final ano-mes-dia Ex:2024-04-10");
dataobjetivo=new date(dataobijetivo+"T23:59:59")
let diasQuefaltam=math.floor((dataobjetivo-dataAtual)/86400000);
document.queryselector("#dias_restantes").textcontent=diasQuefaltam;
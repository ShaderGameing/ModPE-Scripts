/*
   _      _     _     _     _     _     _     _     _     _     _     _     _     _     _     _     _
  / \    / \    / \     / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \  / \    / \
 ( P ) ( o ) ( c ) ( k ) ( e ) ( t ) ( E ) ( s ) ( s ) ( e ) ( n ) ( t ) ( i ) ( a ) ( l ) ( s )
  \_/    \_/   \_/    \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/    \  /
                                                                                                  
Welcome to PocketEssentials Mod , This mod contains everything you will need to get you started with minecraft pocket edition. This contains commands straight from the minecraft pc verision! Check out the wiki for command help !
Made By: ShaderGameing
http://modpe.enjin.com
*/

Block.defineBlock(102,"Enchanting Table",[["enchanting_table_side",0],["enchanting_table_top",0],["enchanting_table_bottom",0]],true,5,0); 
Block.setDestroyTime(102,4); 
Block.setShape(102,0,0,0,1,0.75,1); 
ModPE.setItem(103,"emerald",0,"Emerald"); 


var active = false;
var start = false;
var takeBite = false;
var hunger = 12000;
var gpx = getPlayerX();
var gpy = getPlayerY();
var gpz = getPlayerZ();
var px = Player.getX();
var py = Player.getY();
var pz = Player.getZ();
var homex = 0;
var homey = 0;
var homez = 0;
var homeset = 0;
var warp1x = 0;
var warp1y = 0;
var warp1z = 0;
var wood = 0 
var stone = 0 
var iron = 0 
var gold = 0 
var diamond = 0 
var attack = 0 
var count = 0 
var xplode = 0 
var ride = false;
var riding = false;
var ridingAnimal;
var entity;
var entity1;
var entity2;
var ef=0;
var eb=0;
var fencex;
var fencey;
var fencez;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ModPE.setItem(420,"lead",0,"Lead");
Item.addCraftRecipe(420,2,0,[287,4,0, 334,1,0]);
ModPE.setItem(421,"name_tag",0,"Name Tag");
Item.addCraftRecipe(421,1,0,[287,1,0, 334,1,0, 339,1,0]);
Item.addCraftRecipe(329,1,0,[334,5,0]);



timer = false;
count = 0;
walking = false;
timer2 = false; 
count2 = 0; 
walking2 = false;
timer3 = false;
count3 = 0;
walking3 = false;
timer4 = false; 
count4 = 0;
walking4 = false;
looptimer = false;
loopcount = 0; 

function newLevel() {
print( " [PocketEssentials] Started ");
    print( " [PocketEssentials] Started ");
    print( " [PocketEssentials] Started ");
    print( " [PocketEssentials] Started ");
    clientMessage(" [PocketEssentials] Started ");
	ef = ModPE.readData("efsaved");
eb = ModPE.readData("ebsaved");
start = true;
takeBite = true;
ModPE.readData("Hkey");
}
function procCmd(cmd){
 
var cmd = cmd.split(" ");
/*
This is where the start of the mod is...
*/
 if(cmd[0]=="sneakingOn") { 
  
Entity.setSneaking(getPlayerEnt(), true); 
  
clientMessage(ChatColor.RED +"[PocketEssentials ]"+ ChatColor.GREEN +" Sneaking On"); 
  
}  
if(cmd[0]=="help") {
	clientMessage(ChatColor.RED +"[HELP] [1 of  3]"+ ChatColor.GREEN +"/help | help1 help2 help3  \n /sneakingOn | Turns sneaking on \n /sneakinOff | Turns sneaking off \n /trail | Spawns a golem \n /kill | Kills issuer \n /coords | Shows current X ,Y ,Z \n /sethome | Sets your home area");
}
if(cmd[0]=="help2") {
		clientMessage(ChatColor.RED +"[HELP] [2 of  3]"+ ChatColor.GREEN +"/home | Takes you home \n /heath | Shows current heath \n /creative | Puts you in creative \n /setwarp | Sets your warp \n /warp | Takes you to your warp \n /survival");
	}
	if(cmd[0]=="help3") {
		clientMessage(ChatColor.RED +"[HELP] [3 of  3]"+ ChatColor.GREEN +"/tp <x,y,z> |  Takes you to x,y,z \n /Disquise help \n /enchant \n /rishingrod");
	
	}
	if(cmd[0]=="enchant") {
		//346
		addItemInventory (346, 1);
	}
if(cmd[0]=="trail") {
	golem1 = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(),11,"mob/creeper.png");
      Entity.setRenderType(golem1, 3);
    gx = Entity.getX (golem1);
     gy = Entity.getY (golem1);
    gz = Entity.getZ (golem1);
    walking = true;
	

	}
	if(walking == true) {
		 setTile ( Entity.getX (golem1), Entity.getY(golem1), Entity.getZ(golem1),171);

	}
if(cmd[0]=="kill") {
	Player.setHealth(0);
}
  if(cmd[0]=="coords") {
	  clientMessage(ChatColor.RED +"[PocketEssentials ] " + ChatColor.GREEN + "X=" + Player.getX() + "   " + "Y=" + Player.getY() + "   " + "Z=" + Player.getX());
  }
  if(cmd[0]=="sethome") {
	    homex = getPlayerX();
                  homey = getPlayerY();
                  homez = getPlayerZ();
                  homeset = 1;
                  clientMessage(ChatColor.RED +"[PocketEssentials ] " + ChatColor.BLUE + "Successfully set home."); 
  }
  if(cmd[0]=="home") {
	  if(homeset=1)
                  setPosition(getPlayerEnt(),homex,homey,homez);
                  clientMessage(ChatColor.RED +"[PocketEssentials ] " + ChatColor.GREEN + "Sent home.");
  }
  
if(cmd[0]=="sneakingOff") { 
  
Entity.setSneaking(getPlayerEnt(), false); 
  
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +" Sneaking Off"); 
  
} 
if(cmd[0]=="health"){
 
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN + " You have " + Entity.getHealth(Player.getEntity()) + " half-hearts.");
 
}
if(cmd[0]=="creative") {
 
    Level.setGameMode(1);
 
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +" Gamemode set to creative!");
 
  }
  if(cmd[0] =="setwarp") {
	   warp1x = getPlayerX();
                  warp1y = getPlayerY();
                  warp1z = getPlayerZ();
                  clientMessage (ChatColor.RED +"[PocketEssentials]"+ ChatColor.BLUE + "Warp successfully set.");
  }
  if(cmd[0]=="warp") {
	  setPosition(getPlayerEnt(),warp1x,warp1y,warp1z);  
                   clientMessage (ChatColor.RED +"[PocketEssentials]"+ChatColor.GREEN + "You are now at your warp.");
  }
           
 
  if(cmd[0]=="survival") {
 
    Level.setGameMode(0);
 
  clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN + " Gamemode set to survival!" + ChatColor.GREY + "\n Items being cleared ");
 
 }
 if(cmd[0] == 'tp') {
 
Entity.setPosition(Player.getEntity(),cmd[1],cmd[2],cmd[3]);
 
 }
 
 if(cmd[0] == "pig")
{
Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Pig");
Entity.setRenderType(Player.getEntity(), 8);
}
if(cmd[0] == "cow")
{
Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Cow");
Entity.setRenderType(Player.getEntity(), 7);
}
if(cmd[0] == "chicken")
{
Entity.setMobSkin(Player.getEntity(), "mob/chicken.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Chicken");
Entity.setRenderType(Player.getEntity(), 6);
}
if(cmd[0] == "sheep")
{
Entity.setMobSkin(Player.getEntity(), "mob/sheep_1.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Sheep");
Entity.setRenderType(Player.getEntity(), 9);
}
if(cmd[0] == "spider")
{
Entity.setMobSkin(Player.getEntity(), "mob/spider.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Spider");
Entity.setRenderType(Player.getEntity(), 13);
}
if(cmd[0] == "skeleton")
{
Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Skeleton");
Entity.setRenderType(Player.getEntity(), 12);
addItemInventory(261,1);
addItemInventory(262,64);
}
if(cmd[0] == "creeper")
{
Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Creeper");
Entity.setRenderType(Player.getEntity(), 14);
}
if(cmd[0]=="disguise"&&cmd[1]=="help")
{
clientMessage("[PocketEssentials] [HELP] <Disquise> ?");
clientMessage(" /pig To Disguise as a Pig");
clientMessage(" /cow To Disguise as a Cow");
clientMessage(" /sheep To Disguise as a Sheep");
clientMessage(" /chicken To Disguise as a Chicken");
clientMessage(" /skeleton To Disguise as a Skeleton");
clientMessage(" /creeper To Disguise as a Creeper");
clientMessage(" /spider To Disguise as a Spider");
clientMessage(" /steve To Disguise as a Man");
clientMessage(" /zombie To Disguise as a Zombie");
}
if(cmd[0] == "steve")
{
Entity.setMobSkin(Player.getEntity(), "mob/char.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Man");
Entity.setRenderType(Player.getEntity(), 3);
}
if(cmd[0] == "zombie")
{
Entity.setMobSkin(Player.getEntity(), "mob/zombie.png");
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You Have Now Disguise Into a Zombie");
Entity.setRenderType(Player.getEntity(), 11);
}
if(cmd[0]=="fishingrod") {
	addItemInventory (351, 1);
	
	
}
}


	
	
	
	
	

ModPE.setItem(351,"fishing_rod_uncast",0,"Fishing rod");
ModPE.setFoodItem(350,"fish_cooked",0,5,"cooked fish");
ModPE.setFoodItem(349,"fish_raw",0,2,"Raw fish");





function useItem (x, y, z, itemId, blockId, side)
{
if (itemId == 346 && getTile (x, y + 1, z) == 8 && side == 1 && blockId < 255|| itemId == 346 && getTile (x, y +1, z) == 9 && side == 1 && blockId < 255)
{
var random = Math.floor ((Math.random() * 35) + 1);
if (random <= 23)
{
addItemInventory (31, 1);
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You havent caught a fish");
}
else if (random == 24)
{
addItemInventory (349, 2);
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You almost caught one !");
}
else if (random == 26)
{
addItemInventory (349, 1);
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You have caught a fish");
}
else if (random == 27)
{
addItemInventory (349, 2);
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"You have caught two fish");
}
else if (random == 28)
{
addItemInventory (346, -1);
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"Your Fishing Rod Has Been Broken");
}
else if (random >= 29)
{
preventDefault();
}
}
}



function modTick(){
ex =Entity.getX(entity)
ey =Entity.getY(entity)
ez =Entity.getZ(entity)
e1x =Entity.getX(entity1)
e1y =Entity.getY(entity1)
e1z =Entity.getZ(entity1)
e2x =Entity.getX(entity2)
e2y =Entity.getY(entity2)
e2z =Entity.getZ(entity2)
if(eb == 0) return;
if (ef == 1)
{
if (Math.sqrt(Math.pow(Player.getX() - Entity.getX(entity1), 2) +  Math.pow(Player.getZ() - Entity.getZ(entity1), 2)) < 5) return;
var angle = Math.atan2((Player.getZ() - Entity.getZ(entity1)), (Player.getX() - Entity.getX(entity1)));
Entity.setVelX(entity1,(Math.cos(angle) * 0.2));
Entity.setVelZ(entity1,(Math.sin(angle) * 0.2));
Entity.setRot(entity1, (((angle * 180) / Math.PI) - 90), Entity.getPitch(entity1));
} 
if(ef == 1 && getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,ey,e1z+1) || getTile(e1x-1,e1y,e1z) )
{
setVelY(entity1,0.55)
}
else if (ef == 21)
{
if (Math.sqrt(Math.pow(fencex - Entity.getX(entity1), 2) +  Math.pow(fencez - Entity.getZ(entity1), 2)) < 3) return;
var angle = Math.atan2((fencez - Entity.getZ(entity1)), (fencex - Entity.getX(entity1)));
Entity.setVelX(entity1,(Math.cos(angle) * 0.2));
Entity.setVelZ(entity1,(Math.sin(angle) * 0.2));
Entity.setRot(entity1, (((angle * 180) / Math.PI) - 90), Entity.getPitch(entity1));
}
}
ModPE.setFoodItem(307,"rotten_flesh",10,4,"Rotten Flesh");
ModPE.setFoodItem(300,"experience_bottle",10,4,"Wine");

function useItem(x, y, z, itemId, blockId, side){
if(itemId==420 && blockId==85 && ef==1){
Level.getTile(x, y, z);
fencex = Math.floor(x);
fencey = Math.floor(y);
fencez = Math.floor(z);
preventDefault();
ef=21;
eb=21;
clientMessage("Entity tied to fence");
}
else if(itemId==420 && blockId==85 && ef==21) {
preventDefault();
ef=1;
eb=1;
clientMessage("Entity untied but you're dragging it");
}
 
if(itemId==366&&takeBite==true){
hunger = hunger + 500;
addItemInventory(366, -1);
print("500 Hunger Points ")
}
if(itemId==320&&takeBite==true){
hunger = hunger + 500;
addItemInventory(320, -1);
print("500 Hunger Points ")
}
if(itemId==364&&takeBite==true){
hunger = hunger + 500;
addItemInventory(364, -1);
print("500 Hunger Points ")
}
if(itemId==282&&takeBite==true){
hunger = hunger + 500;
addItemInventory(282, -1);
print("500 Hunger Points ")
}
if(itemId==319&&takeBite==true){
hunger = hunger + 200;
addItemInventory(319, -1);
print("200 Hunger Points ")
}
if(itemId==363&&takeBite==true){
hunger = hunger + 200;
addItemInventory(363, -1);
print("200 Hunger Points ")
}
if(itemId==365&&takeBite==true){
hunger = hunger + 200;
addItemInventory(365, -1);
print("200 Hunger Points ")
}
if(itemId==391&&takeBite==true){
hunger = hunger + 250;
addItemInventory(391, -1);
print("250 Hunger Points ")
}
if(itemId==392&&takeBite==true){
hunger = hunger + 250;
addItemInventory(392, -1);
print("250 Hunger Points ")
}
if(itemId==393&&takeBite==true){
hunger = hunger + 500;
addItemInventory(393, -1);
print("500 Hunger Points ")
}
if(itemId==457&&takeBite==true){
hunger = hunger + 250;
addItemInventory(457, -1);
print("250 Hunger Points ")
}
if(itemId==459&&takeBite==true){
hunger = hunger +  500;
addItemInventory(459, -1);
print("500 Hunger Points ")
}
if(itemId==400&&takeBite==true){
hunger = hunger + 500;
addItemInventory(400, -1);
print("500 Hunger Points ")
}
if(itemId==260&&takeBite==true){
hunger = hunger + 450;
addItemInventory(260, -1);
print("450 Hunger Points ")
}
if(itemId==360&&takeBite==true){
hunger = hunger + 300;
addItemInventory(360, -1);
print("300 Hunger Points ")
}
}

function modTick()
{
if(start==1)
{
hunger--;
}
if(hunger==11990)
{
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +" Heath: Full  ")
}
if(hunger==7000)
{
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +" ...i wouldn't mind some food... \n Hunger at 50% ");
}
if(hunger==3000)
{
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +"  ...I'm getting pretty hungry... \n Hunger at 75% ");
}
if(hunger==0)
{
Entity.setHealth(getPlayerEnt(), 0);
clientMessage(ChatColor.RED +"[PocketEssentials]"+ ChatColor.GREEN +" You died of starvation");
hunger = 12000;
}
}
 
function leaveGame()
{
ModPE.saveData(hunger,"Hkey"); }




function deathHook(murderer, victim){
if(victim==entity1){
ef=0;
eb=0;
clientMessage("Entity died pick another one");
}
if(Entity.getEntityTypeId(v)==32) {
Level.dropItem(getPlayerX()+3,getPlayerY()+1,getPlayerZ(),0.2,307,2,0);
}
}

function leaveLevel(){
ModPE.saveData("efsaved", ef);
ModPE.saveData("ebsaved", eb);
}




ModPE.setItem(501,"name_tag",0,"Name Tag");
ModPE.setItem(502,"brewing_stand",0,"Brewing Stand");
ModPE.setItem(503,"boat",0,"Boat");
ModPE.setItem(388,"emerald",0,"Emerald");
ModPE.setItem(504,"blaze_rod",0,"Blaze Rod");
ModPE.setItem(505,"blaze_powder",0,"Blaze Powder");
ModPE.setFoodItem(506,"apple_golden",0,6,"Golden Apple");
ModPE.setItem(507,"book_enchanted",0,"Enchanted Book");
ModPE.setItem(508,"ender_eye",0,"Ender Eye");
ModPE.setItem(509,"diamond_horse_armor",0,"Diamond House Armor");
ModPE.setItem(510,"experience_bottle",0,"Experience Bottle");
ModPE.setFoodItem(511,"fish_raw",0,6,"Raw Fish");
ModPE.setFoodItem(499,"fish_cooked",0,9,"Cooked Fish");


  
function useItem(x,y,z,itemId,blockId,side) 
{ 
if(itemId == 267 &&  blockId == 102) 
{ 
iron = 1 
clientMessage("[Enchantment]Iron sword is enchanted") 
} 
if(itemId == 276 &&  blockId == 102) 
{ 
diamond = 1 
clientMessage("[Enchantment]Diamomd sword is enchanted") 
  
} 
if(itemId == 268 &&  blockId == 102) 
{ 
wood = 1 
clientMessage("[Enchantment]Wooden sword is enchanted") 
  
} 
if(itemId == 283 &&  blockId == 102) 
{ 
gold = 1 
clientMessage("[Enchantment]Golden sword is enchanted") 
  
} 
if(itemId == 272 &&  blockId == 102) 
{ 
stone = 1 
attack = 1 
clientMessage("[Enchantment]Stone sword is enchanted") 
  
} 
  
if(itemId == 103) 
{ 
setTile(x,y+1,z,102) 
clientMessage("[Enchantment]An enchanted table has been made") 
addItemInventory(103,-1) 
} 
if(itemId == 280 && blockId == 103) 
{ 
wood = 0 
stone = 0 
iron = 0 
gold = 0 
diamond = 0 
attack = 0 
count = 0 
xplode = 0 
clientMessage("[Enchantment] Enchanted Items has been returned to normal") 
} 
} 
function attackHook(attacker,victim) 
{ 
  
var ourItem = getCarriedItem(); 
  if(wood == 1 && ourItem==268) 
    { 
        preventDefault(); 
       Entity.setFireTicks(victim,2.55); 
           
    } 
      
      
 var ourItem = getCarriedItem(); 
  if(stone == 1 && ourItem==272 && attack == 1) 
    { 
        preventDefault(); 
        rideAnimal(attacker,victim); 
        attack = 2   
           
    } 
        
 var ourItem = getCarriedItem(); 
  if(iron == 1 && ourItem==267) 
    { 
        preventDefault(); 
        setVelY(victim,1.55); 
           
    } 
      
   var ourItem = getCarriedItem(); 
  if(gold == 1 && ourItem==283) 
   { 
        preventDefault(); 
   if(getYaw() < 0) 
    { 
        var temp = getYaw()+90; 
        for(i=0; temp<0; i++) 
        { 
            temp += 360; 
        } 
        x = Math.cos(temp*(Math.PI/180)); 
        z = Math.sin(temp*(Math.PI/180)); 
        setVelX(victim, x*10); 
        setVelY(victim, 1.55); 
        setVelZ(victim, z*10); 
    } 
    else if(getYaw() > 0 && getYaw() < 360) 
    { 
        var temp = getYaw()+90; 
        x = Math.cos(temp*(Math.PI/180)); 
        z = Math.sin(temp*(Math.PI/180)); 
        setVelX(victim, x*10); 
        setVelY(victim, 1.55); 
        setVelZ(victim, z*10); 
    } 
    else if(getYaw() >= 360) 
    { 
        var temp = getYaw()+90; 
        for(i=0; temp>=360; i++) 
        { 
            temp -= 360; 
        } 
        x = Math.cos(temp*(Math.PI/180)); 
        z = Math.sin(temp*(Math.PI/180)); 
        setVelX(victim, x*10); 
        setVelY(victim, 1.55); 
        setVelZ(victim, z*10); 
    } 
           
 } 
      
  var ourItem = getCarriedItem(); 
  if(diamond == 1 && ourItem==276) 
    { 
        Entity.setHealth(victim,8) 
        Entity.setFireTicks(victim,5) 
        xplode = 1 
    } 
      
} 
function deathHook(attacker,victim) 
{ 
ex = Entity.getX(victim) 
ey = Entity.getY(victim) 
ez = Entity.getZ(victim) 
  
  
if(xplode == 1) 
{ 
explode(ex,ey,ez,2,2) 
xplode = 0 
} 
} 
  
function modTick() 
{ 
if(attack == 2) 
{ 
count++; 
} 
if(count == 100) 
{ 
count = 0 
attack = 1 
clientMessage("[Enchantment]stone sword is ready ") 
} 
} 

function reload() {
 
        clientMessage("You Have died, [PocketEssentials] Has Restarted...");
 
  if(Level.getGameMode() == 1) {
Level.setGameMode(0);
Level.setGameMode(1);
clientMessgae("[PocketEssentials]Resetting creative inventory..."); 
 }
 }

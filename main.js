function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,500);
	canvas.parent('canvas');

	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(1000,1000);
	video.parent('game_console');
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on("pose",gotResult);
	
}

function modelLoaded()
{
	console.log("Ya se cargo el modelo");
}

function gotResult(i)
	{
      if (i.length>0)
      {
		console.log(i);

	  }
	}

/*--- Platform page 047 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img6={max:1,pos:0,grp:'7'};
	Img6[0]=new Image();Img6[0].src='images/square.gif';
	Img6[1]=new Image();Img6[1].src='images/top_construct_next-button.gif';
	Img8={max:1,pos:0,grp:'9'};
	Img8[0]=new Image();Img8[0].src='images/square.gif';
	Img8[1]=new Image();Img8[1].src='images/top_construct_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e6\').src':(IE)?'e6.src':'document.e6.src';
	IDP[2]=(V5)?'document.getElementById(\'e8\').src':(IE)?'e8.src':'document.e8.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */

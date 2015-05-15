/*--- Platform page 031 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img7={max:1,pos:0,grp:'8'};
	Img7[0]=new Image();Img7[0].src='images/square.gif';
	Img7[1]=new Image();Img7[1].src='images/top_construct_back-button.gif';
	Img9={max:1,pos:0,grp:'10'};
	Img9[0]=new Image();Img9[0].src='images/square.gif';
	Img9[1]=new Image();Img9[1].src='images/top_construct_next-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e7\').src':(IE)?'e7.src':'document.e7.src';
	IDP[2]=(V5)?'document.getElementById(\'e9\').src':(IE)?'e9.src':'document.e9.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */

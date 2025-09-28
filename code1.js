gdjs.TutorialCode = {};
gdjs.TutorialCode.localVariables = [];
gdjs.TutorialCode.GDNewTileMapObjects1= [];
gdjs.TutorialCode.GDNewTileMapObjects2= [];
gdjs.TutorialCode.GDT_9595Text_9595RightObjects1= [];
gdjs.TutorialCode.GDT_9595Text_9595RightObjects2= [];
gdjs.TutorialCode.GDSummer_9595TileObjects1= [];
gdjs.TutorialCode.GDSummer_9595TileObjects2= [];
gdjs.TutorialCode.GDT_9595Text_9595DashObjects1= [];
gdjs.TutorialCode.GDT_9595Text_9595DashObjects2= [];
gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1= [];
gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects2= [];
gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1= [];
gdjs.TutorialCode.GDT_9595Text_9595JumpObjects2= [];
gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1= [];
gdjs.TutorialCode.GDT_9595Text_9595LeftObjects2= [];
gdjs.TutorialCode.GDPortal1Objects1= [];
gdjs.TutorialCode.GDPortal1Objects2= [];
gdjs.TutorialCode.GDKnightObjects1= [];
gdjs.TutorialCode.GDKnightObjects2= [];
gdjs.TutorialCode.GDPortalObjects1= [];
gdjs.TutorialCode.GDPortalObjects2= [];
gdjs.TutorialCode.GDPlatform_95953Objects1= [];
gdjs.TutorialCode.GDPlatform_95953Objects2= [];
gdjs.TutorialCode.GDPlatform_95952Objects1= [];
gdjs.TutorialCode.GDPlatform_95952Objects2= [];
gdjs.TutorialCode.GDPlatform_95951Objects1= [];
gdjs.TutorialCode.GDPlatform_95951Objects2= [];
gdjs.TutorialCode.GDCorner_9595platformObjects1= [];
gdjs.TutorialCode.GDCorner_9595platformObjects2= [];
gdjs.TutorialCode.GDcoin_9595goldObjects1= [];
gdjs.TutorialCode.GDcoin_9595goldObjects2= [];
gdjs.TutorialCode.GDTornadoObjects1= [];
gdjs.TutorialCode.GDTornadoObjects2= [];


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("T_Text_Left"), gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Right"), gdjs.TutorialCode.GDT_9595Text_9595RightObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595RightObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595RightObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("T_Text_Jump"), gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Left"), gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


};gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("T_Text_Double_Jump"), gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Jump"), gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
}

}


};gdjs.TutorialCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("T_Text_Dash"), gdjs.TutorialCode.GDT_9595Text_9595DashObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Double_Jump"), gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595DashObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595DashObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}
}

}


};gdjs.TutorialCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("T_Text_Dash"), gdjs.TutorialCode.GDT_9595Text_9595DashObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595DashObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595DashObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}
}

}


};gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.TutorialCode.GDKnightObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDPortalObjects1Objects = Hashtable.newFrom({"Portal": gdjs.TutorialCode.GDPortalObjects1});
gdjs.TutorialCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("T_Text_Dash"), gdjs.TutorialCode.GDT_9595Text_9595DashObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Double_Jump"), gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Jump"), gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Left"), gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Text_Right"), gdjs.TutorialCode.GDT_9595Text_9595RightObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595DashObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595DashObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TutorialCode.GDT_9595Text_9595RightObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDT_9595Text_9595RightObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.TutorialCode.GDKnightObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDKnightObjects1[i].getBehavior("HorizontalDash").SimulateDashKey(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.TutorialCode.GDKnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDKnightObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDKnightObjects1[k] = gdjs.TutorialCode.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDKnightObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {

{ //Subevents
gdjs.TutorialCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {

{ //Subevents
gdjs.TutorialCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {

{ //Subevents
gdjs.TutorialCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TutorialCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {

{ //Subevents
gdjs.TutorialCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.TutorialCode.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.TutorialCode.GDPortalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDKnightObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDPortalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}
}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDNewTileMapObjects1.length = 0;
gdjs.TutorialCode.GDNewTileMapObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595RightObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595RightObjects2.length = 0;
gdjs.TutorialCode.GDSummer_9595TileObjects1.length = 0;
gdjs.TutorialCode.GDSummer_9595TileObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595DashObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595DashObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595JumpObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595LeftObjects2.length = 0;
gdjs.TutorialCode.GDPortal1Objects1.length = 0;
gdjs.TutorialCode.GDPortal1Objects2.length = 0;
gdjs.TutorialCode.GDKnightObjects1.length = 0;
gdjs.TutorialCode.GDKnightObjects2.length = 0;
gdjs.TutorialCode.GDPortalObjects1.length = 0;
gdjs.TutorialCode.GDPortalObjects2.length = 0;
gdjs.TutorialCode.GDPlatform_95953Objects1.length = 0;
gdjs.TutorialCode.GDPlatform_95953Objects2.length = 0;
gdjs.TutorialCode.GDPlatform_95952Objects1.length = 0;
gdjs.TutorialCode.GDPlatform_95952Objects2.length = 0;
gdjs.TutorialCode.GDPlatform_95951Objects1.length = 0;
gdjs.TutorialCode.GDPlatform_95951Objects2.length = 0;
gdjs.TutorialCode.GDCorner_9595platformObjects1.length = 0;
gdjs.TutorialCode.GDCorner_9595platformObjects2.length = 0;
gdjs.TutorialCode.GDcoin_9595goldObjects1.length = 0;
gdjs.TutorialCode.GDcoin_9595goldObjects2.length = 0;
gdjs.TutorialCode.GDTornadoObjects1.length = 0;
gdjs.TutorialCode.GDTornadoObjects2.length = 0;

gdjs.TutorialCode.eventsList5(runtimeScene);
gdjs.TutorialCode.GDNewTileMapObjects1.length = 0;
gdjs.TutorialCode.GDNewTileMapObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595RightObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595RightObjects2.length = 0;
gdjs.TutorialCode.GDSummer_9595TileObjects1.length = 0;
gdjs.TutorialCode.GDSummer_9595TileObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595DashObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595DashObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595Double_9595JumpObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595JumpObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595JumpObjects2.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595LeftObjects1.length = 0;
gdjs.TutorialCode.GDT_9595Text_9595LeftObjects2.length = 0;
gdjs.TutorialCode.GDPortal1Objects1.length = 0;
gdjs.TutorialCode.GDPortal1Objects2.length = 0;
gdjs.TutorialCode.GDKnightObjects1.length = 0;
gdjs.TutorialCode.GDKnightObjects2.length = 0;
gdjs.TutorialCode.GDPortalObjects1.length = 0;
gdjs.TutorialCode.GDPortalObjects2.length = 0;
gdjs.TutorialCode.GDPlatform_95953Objects1.length = 0;
gdjs.TutorialCode.GDPlatform_95953Objects2.length = 0;
gdjs.TutorialCode.GDPlatform_95952Objects1.length = 0;
gdjs.TutorialCode.GDPlatform_95952Objects2.length = 0;
gdjs.TutorialCode.GDPlatform_95951Objects1.length = 0;
gdjs.TutorialCode.GDPlatform_95951Objects2.length = 0;
gdjs.TutorialCode.GDCorner_9595platformObjects1.length = 0;
gdjs.TutorialCode.GDCorner_9595platformObjects2.length = 0;
gdjs.TutorialCode.GDcoin_9595goldObjects1.length = 0;
gdjs.TutorialCode.GDcoin_9595goldObjects2.length = 0;
gdjs.TutorialCode.GDTornadoObjects1.length = 0;
gdjs.TutorialCode.GDTornadoObjects2.length = 0;


return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;

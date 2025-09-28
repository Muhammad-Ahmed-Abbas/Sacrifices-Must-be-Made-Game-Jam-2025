gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDBackground_9595Colored_9595GrassObjects1= [];
gdjs.Game_32SceneCode.GDBackground_9595Colored_9595GrassObjects2= [];
gdjs.Game_32SceneCode.GDSummer_9595TileObjects1= [];
gdjs.Game_32SceneCode.GDSummer_9595TileObjects2= [];
gdjs.Game_32SceneCode.GDKnightObjects1= [];
gdjs.Game_32SceneCode.GDKnightObjects2= [];
gdjs.Game_32SceneCode.GDPortalObjects1= [];
gdjs.Game_32SceneCode.GDPortalObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_95953Objects1= [];
gdjs.Game_32SceneCode.GDPlatform_95953Objects2= [];
gdjs.Game_32SceneCode.GDPlatform_95952Objects1= [];
gdjs.Game_32SceneCode.GDPlatform_95952Objects2= [];
gdjs.Game_32SceneCode.GDPlatform_95951Objects1= [];
gdjs.Game_32SceneCode.GDPlatform_95951Objects2= [];
gdjs.Game_32SceneCode.GDCorner_9595platformObjects1= [];
gdjs.Game_32SceneCode.GDCorner_9595platformObjects2= [];
gdjs.Game_32SceneCode.GDcoin_9595goldObjects1= [];
gdjs.Game_32SceneCode.GDcoin_9595goldObjects2= [];
gdjs.Game_32SceneCode.GDTornadoObjects1= [];
gdjs.Game_32SceneCode.GDTornadoObjects2= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Game_32SceneCode.GDKnightObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDKnightObjects1[i].getBehavior("HorizontalDash").SimulateDashKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Game_32SceneCode.GDKnightObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDKnightObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDKnightObjects1[0] : null), true, "", 0);
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDBackground_9595Colored_9595GrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackground_9595Colored_9595GrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDSummer_9595TileObjects1.length = 0;
gdjs.Game_32SceneCode.GDSummer_9595TileObjects2.length = 0;
gdjs.Game_32SceneCode.GDKnightObjects1.length = 0;
gdjs.Game_32SceneCode.GDKnightObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortalObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortalObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95953Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95953Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDCorner_9595platformObjects1.length = 0;
gdjs.Game_32SceneCode.GDCorner_9595platformObjects2.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595goldObjects1.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595goldObjects2.length = 0;
gdjs.Game_32SceneCode.GDTornadoObjects1.length = 0;
gdjs.Game_32SceneCode.GDTornadoObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDBackground_9595Colored_9595GrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackground_9595Colored_9595GrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDSummer_9595TileObjects1.length = 0;
gdjs.Game_32SceneCode.GDSummer_9595TileObjects2.length = 0;
gdjs.Game_32SceneCode.GDKnightObjects1.length = 0;
gdjs.Game_32SceneCode.GDKnightObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortalObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortalObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95953Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95953Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDCorner_9595platformObjects1.length = 0;
gdjs.Game_32SceneCode.GDCorner_9595platformObjects2.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595goldObjects1.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595goldObjects2.length = 0;
gdjs.Game_32SceneCode.GDTornadoObjects1.length = 0;
gdjs.Game_32SceneCode.GDTornadoObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;

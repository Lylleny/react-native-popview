import React from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Text,
    TouchableOpacity

} from 'react-native';
import PropTypes from 'prop-types';


const propTypes = {
    visible: PropTypes.bool,//showing state
    positionStyle:PropTypes.object,//popView position in screen，like:{left:30,top:30}

    arrowPosition:PropTypes.number,//popArrow locate at which border，values in（"top":1,"right":2,"bottom":3,"left":4）,
    marginArrow:PropTypes.number,//popArrow margin value which from four vertex
    hasBorder:PropTypes.bool,//popItem which has bottom-border or not
    onRequestClose: PropTypes.func,//disappear popView function
    itemPress:PropTypes.func,//popView item pressed function
    items:PropTypes.object,//popView content，can be string or array，for example:"ios",["ios","android"]



};

const PopView = ({ visible, positionStyle,hasBorder,onRequestClose,items,arrowPosition,marginArrow ,itemPress}) => (
    <Modal
        visible={visible}
    >
            <TouchableOpacity
                key={'spinner'}
                onPress={onRequestClose}
                style={styles.container}
            >
                <View style={[{position: 'absolute', flexDirection:(arrowPosition==1||arrowPosition==3)?'column':'row', justifyContent: 'center', alignItems: 'flex-start'},positionStyle]}>
                    {
                        arrowPosition==1||arrowPosition == 4?
                    <View style={{
                        marginTop:arrowPosition==4?marginArrow:0,
                        marginLeft:arrowPosition == 1?marginArrow:0,
                        width: 0,
                        height: 0,
                        borderTopWidth: 8,
                        borderTopColor: 'transparent',
                        borderRightWidth: 8,
                        borderRightColor: arrowPosition ==4?'#fff':'transparent',
                        borderLeftWidth: 8,
                        borderLeftColor: 'transparent',
                        borderBottomWidth: 8,
                        borderBottomColor: arrowPosition==1?'#fff':'transparent'
                    }}/>:
                        null
                    }
                    <View style={{backgroundColor:'#fff',padding:15,borderRadius:4,opacity:1}}>
                        {
                           typeof items == 'object' && Array.isArray(items)?
                                items.map((item, index) => {
                                   return (
                                        <TouchableOpacity style={{paddingVertical:5}} onPress={()=>itemPress(index)}>
                                            <Text style={{fontSize: 12, color: '#333', lineHeight: 18}}>{item}</Text>
                                            {
                                                hasBorder?
                                                    <View style={{height:1, flex:1, backgroundColor:'#f0f0f0',marginTop:8}}/>:null}
                                        </TouchableOpacity>

                                   )
                               })
                               : null
                        }

                        {
                            typeof items == 'string'?
                                <TouchableOpacity onPress={()=>itemPress(0)}>
                                    <Text style={{fontSize: 12, color: '#333', lineHeight: 18}}>{items}</Text>
                                    {
                                        hasBorder?
                                            <View style={{height:1, flex:1, backgroundColor:'#f0f0f0',marginTop:5}}/>
                                            :null}
                                </TouchableOpacity>
                                :null

                        }



                    </View>
                    {
                        arrowPosition==2||arrowPosition == 3?

                    <View style={{
                        marginTop:arrowPosition==2?marginArrow:0,
                        marginLeft:arrowPosition == 3?marginArrow:0,
                        width: 0,
                        height: 0,
                        borderTopWidth: 8,
                        borderTopColor: arrowPosition == 3?'#fff':'transparent',
                        borderRightWidth: 8,
                        borderRightColor: 'transparent',
                        borderLeftWidth: 8,
                        borderLeftColor: arrowPosition==2?'#fff':'transparent',
                        borderBottomWidth: 8,
                        borderBottomColor: 'transparent'
                    }}/>
                            :
                            null}

                </View>

            </TouchableOpacity>
    </Modal>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },


});

PopView.propTypes = propTypes;

PopView.defaultProps = {
    visible: false,
    hasBorder:false,
    marginArrow:8,
    arrowPosition:4,
    positionStyle:{left:50,top:50},
    items:['ios','android'],
    itemPress(){},
    onRequestClose() {}
};

export default PopView;

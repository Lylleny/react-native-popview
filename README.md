## Features
1.Pure js .
2.Android and iOS both support.
3.Lots of options setting for popview.

## Installation
```
npm install --s react-native-popview
```

## Properties
Name          |  Default                        |      Type           |  Description
--------------|---------------------------------|---------------------|-------------------
visiable        |  true                           |   Bool            |  control popview show or hidden
items           |  ['ios','android']          |   Object         |  content of popview,which can be list or string 
itemPress    |  {}                             |   Function          |  Touch event of the item
positionStyle   |  {left:30,top:50}     |   Object            |  popView position in screen
arrowPosition  |  1                             |   Number            |  popArrow locate at which border，values in（"top":1,"right":2,"bottom":3,"left":4）
marginArrow |  10                           |   Number            |  popArrow margin value which from four vertex
hasBorder     |  false                          |   Bool              |  popItem which has bottom-border or not


## Usage
```
import {React} from 'react';
import PopView from 'react-native-popview';

export default class Example extends React.Componment{
      render(){
      	return(
           <View>
             <PopView visiable={true} items={['android','web','ios']} hasBorder={true}/>
           </View>
      	)
      }
}
```

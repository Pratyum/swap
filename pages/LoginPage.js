import React, { Component } from 'react';
import { Text, StyleSheet, View , Button , Image , TextInput} from 'react-native';
import ActionButton from '../components/ActionButton';


export default class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = { email: '', password: '', error: '', loading: false,isLoggedIn:false};
    }


    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
    }

    onLoginWithFB(){
        this.setState({ error: '', loading: true });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
          return <Button disabled title="Loading" />;
        }

        return( <View style={{flex:3}}>
                    <ActionButton onPress={this.onLoginPress.bind(this)} title="Login" />
                    <ActionButton onPress={this.onLoginWithFB.bind(this)} title="Login with FB" />
                </View>
              );
    }

    render() {
        if(this.state.isLoggedIn){
            return <MessageContainer/>
        }else{
            return (
                <View style={{flex:1,top:30}}>
                    <Image
                    source={require('../assets/Logo.png')}
                    style={{flex:4,width:null,height:null}}/>
                    <Image
                    source={require('../assets/CoverPic.jpg')}
                    style={{flex:5,width:null,height:null}}/>
                    <TextInput
                        autoCorrect={false}
                        placeholder={"Please Enter Email"}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        style={styles.inputStyle}
                    />
                    <TextInput
                        autoCorrect={false}
                        placeholder={"Please Enter Pasword"}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        style={styles.inputStyle}
                        secureTextEntry={true}
                    />   
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrSpinner()}
                </View>
            );
        }
    }
}

const styles = StyleSheet.flatten({
    inputStyle: {
      paddingRight: 1,
      paddingLeft: 1,
      paddingBottom: 1,
      color: '#262626',
      fontSize: 18,
      fontWeight: '200',
      flex: 1,
      height: 40
  },});
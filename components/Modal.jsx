import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { AsyncStorage } from "react-native-async-storage";
import Modal from 'react-native-modal';
import InputForm from "../components/InputForm";

export const Modal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <View>
            <Button title="Manually enter receipt info" onPress={toggleModal} />
            <Modal
                isVisible={isModalVisible}>
                <View>
                    <InputForm />
                    <View>
                        <Button title="Hide modal" onPress={toggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
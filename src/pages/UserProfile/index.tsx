import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaList, FaGift, FaUserEdit, FaStar } from 'react-icons/fa';
import { Breadcrumb } from '../../components';
import TabSet from '../../components/TabSet';
import { RootStore } from '../../redux/store';
import {
    Container,
    StyledTabTitle,
    TabTitleContainer,
    StyledTabLink,
} from './styles';
import EditProfile from './editProfile';

const tabTitles = [
    <TabTitleContainer>
        <FaList />
        <StyledTabTitle>My orders</StyledTabTitle>
    </TabTitleContainer>,
    <TabTitleContainer>
        <FaGift />
        <StyledTabTitle>My wish list</StyledTabTitle>
    </TabTitleContainer>,
    <TabTitleContainer>
        <FaUserEdit />
        <StyledTabTitle>Edit profile</StyledTabTitle>
    </TabTitleContainer>,
    <TabTitleContainer>
        <FaStar />
        <StyledTabLink to="/offers">
            <StyledTabTitle>See offers</StyledTabTitle>
        </StyledTabLink>
    </TabTitleContainer>,
];

const UserProfile = () => {
    const [tabIndex, setTabIndex] = useState(2);
    const { plantillaReducer, authReducer } = useSelector(
        (state: RootStore) => state
    );
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const handleTabSelect = (index: number) => {
        setTabIndex(index);
    };

    const tabPanels = [
        <h2>Any content 1</h2>,
        <h2>Any content 2</h2>,
        <EditProfile
            {...authReducer}
            colorfondo={plantillaStyles?.colorFondo}
            colortexto={plantillaStyles?.colorTexto}
        />,
        <h2>Any content 4</h2>,
    ];

    return (
        <Container>
            <div className="container-fluid">
                <div className="container">
                    <Breadcrumb />
                    <TabSet
                        titles={tabTitles}
                        panels={tabPanels}
                        tabIndex={tabIndex}
                        onSelect={handleTabSelect}
                        color={plantillaStyles?.colorFondo}
                    />
                </div>
            </div>
        </Container>
    );
};

export default UserProfile;

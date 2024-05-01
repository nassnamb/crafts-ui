import React, { useState } from "react";
import { Steps, Button, message, List } from 'antd';
import { theme } from 'antd';

const { Step } = Steps;

const StepsForBooking: React.FC = () => {

    const data = [
        'Kaloum', 'Matam','Dixinn','Matoto','Ratoma','Kassa',
        'Kindia','Télimélé','Dubréka','Coyah','Forécaraiah',
        'Boké', 'Fria','Boffa','Gaoual','Koundara',
        'Mamou','Pita','Dalaba',
        'Labé','Lélouma','Mali','Tougué','Koumbia',
        'Kankan','Kérouané','Kouroussa','Mandiana','Siguiri',
        'Faranah', 'Kissidougou','Dabola','Dinguiraye',
        'N’Zérékoré','Yomou','Macenta','Beyla','Guéckédou','Lola'
    ];

    const steps = [
        {
            title: 'Commune',
            content: <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        },
        {
            title: 'Jobeur',
            content: 'Second-content',
        },
        {
            title: 'Service',
            content: 'Last-content',
        },
        {
            title: 'Réservation',
            content: 'Last-content',
        },
    ];

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const contentStyle: React.CSSProperties = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={next}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={prev}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default StepsForBooking;
